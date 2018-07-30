import 'dotenv/config';
import express from 'express';
import auth from './routes/auth';

const app = express();

app.use('/auth', auth);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
