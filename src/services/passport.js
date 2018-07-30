import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    (token, refreshToken, profile, done) => {
      console.log('token', token);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }
  )
);
