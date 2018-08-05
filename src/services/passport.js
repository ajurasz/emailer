import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import User from '../models/user';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ id })
    .then(user => done(null, user))
    .catch(err => done(err, null));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (token, refreshToken, profile, done) => {
      const id = profile.id;
      const { familyName, givenName } = profile.name;
      User.findOne({ id })
        .then(user => {
          if (!user) {
            return new User({
              id: profile.id,
              familyName,
              givenName
            }).save();
          }
          return user;
        })
        .then(user => done(null, user))
        .catch(err => done(err, null));
    }
  )
);
