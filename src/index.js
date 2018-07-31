import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import auth from './routes/auth';

mongoose
  .connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log('connected'))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

const app = express();

app.use('/auth', auth);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
