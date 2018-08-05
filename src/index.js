import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import path from 'path';

import './services/passport';
import checkAuth from './helpers/checkAuth';
import auth from './routes/auth';
import user from './routes/user';
import wallet from './routes/wallet';

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

app.use(bodyParser.json());
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
app.use('/api/wallet', checkAuth, wallet);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
