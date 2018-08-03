import express from 'express';

const router = express.Router();

router.get('/info', (req, res) => {
  res.json(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(201).json();
});

export default router;
