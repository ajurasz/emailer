import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import User from '../models/user';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    (token, refreshToken, profile, cb) => {
      const id = profile.id;
      const { familyName, givenName } = profile.name;
      User.findOne({ id }).then(user => {
        if (!user) {
          console.log('creating new user');
          return new User({
            id: profile.id,
            familyName,
            givenName
          }).save();
        }
        console.log(`user with id ${id} exist`);
      });
    }
  )
);
