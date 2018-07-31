import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  id: String,
  familyName: String,
  givenName: String
});

export default mongoose.model('Users', schema);
