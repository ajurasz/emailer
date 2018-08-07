import express from 'express';

import Survay from '../models/survey';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send();
});

router.post('/', (req, res) => {
  const { title, subject, body, recipients } = req.body;
  res.status(200).send();
});

router.post('/webhook', (req, res) => {
  res.status(200).send();
});

export default router;
