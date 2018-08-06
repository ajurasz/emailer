import mongoose, { Schema } from 'mongoose';

export const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

const schema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  createdAt: Date,
  sentAt: Date,
  updatedAt: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'users' }
});

export default mongoose.model('survays', schema);
