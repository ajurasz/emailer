import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  id: String,
  familyName: String,
  givenName: String,
  credits: {
    type: Number,
    default: 0
  }
});

schema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret._id;
    delete ret.__v;
  }
});

export default mongoose.model('Users', schema);
