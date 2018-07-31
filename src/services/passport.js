import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import User from '../models/user';

console.log('passport');
passport.serializeUser((user, done) => {
  console.log('serializeUser');
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('deserializeUser');
  User.findOne({ id })
    .then(user => done(null, user))
    .catch(err => done(err, null));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    (token, refreshToken, profile, done) => {
      const id = profile.id;
      const { familyName, givenName } = profile.name;
      User.findOne({ id })
        .then(user => {
          if (!user) {
            console.log('creating new user');
            return new User({
              id: profile.id,
              familyName,
              givenName
            }).save();
          }
          console.log(`user with id ${id} exist`);
          return user;
        })
        .then(user => done(null, user))
        .catch(err => done(err, null));
    }
  )
);
