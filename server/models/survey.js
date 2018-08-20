import mongoose, { Schema } from 'mongoose';

export const recipientSchema = new Schema({
  email: { type: String, required: true },
  responded: { type: Boolean, default: false }
});

const minLength = min => val => val.length >= min;

const schema = new Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  recipients: {
    type: [recipientSchema],
    validate: [minLength(1), 'Path `{PATH}` require at least 1 recipient']
  },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  createdAt: Date,
  sentAt: Date,
  updatedAt: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'users' }
});

schema.statics.createFromRequest = ({
  title,
  subject,
  body,
  recipients,
  userId
}) => {
  const recipientModels = (recipients || []).map(email => ({ email }));
  const s = new Survey({
    title,
    subject,
    body,
    recipients: recipientModels,
    createdAt: new Date(),
    _user: userId
  });
  return new Promise((resolve, reject) => {
    s.validate(err => {
      if (err) {
        reject(err);
      } else {
        resolve(s);
      }
    });
  });
};

schema.statics.updateStats = ({ surveyId, email, choice }) => {
  Survey.updateOne(
    {
      _id: surveyId,
      recipients: {
        $elemMatch: {
          email,
          responded: false
        }
      }
    },
    {
      $inc: {
        [choice]: 1
      },
      $set: {
        'recipients.$.responded': true
      },
      updatedAt: new Date()
    }
  ).exec();
};

schema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.__v;
  }
});

const Survey = mongoose.model('surveys', schema);
export default Survey;
