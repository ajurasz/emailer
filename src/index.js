import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieSession from 'cookie-session';

import './services/passport';
import checkAuth from './helpers/checkAuth';
import auth from './routes/auth';
import user from './routes/user';

mongoose
  .connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log('connected to db'))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', auth);
app.use('/api/user', checkAuth, user);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
