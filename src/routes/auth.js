import express from 'express';
import passport from 'passport';

console.log('auth');
const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', passport.authenticate('google'));

router.get('/user-info', (req, res) => {
  res.send(req.user);
});

export default router;
