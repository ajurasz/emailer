import express from 'express';
import passport from 'passport';
import '../services/passport';

const router = express.Router();

router.get(
  '/google',
  passport.authorize('google', { scope: ['profile', 'email'] })
);
router.get('/google/callback', passport.authorize('google'));

export default router;
