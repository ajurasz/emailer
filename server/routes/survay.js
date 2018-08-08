import express from 'express';
import to from '../helpers/to';

import Survay from '../models/survey';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send();
});

router.post('/', async (req, res) => {
  const { user } = req;

  const [err, survay] = await to(
    Survay.createFromRequest({ ...req.body, userId: user._id })
  );

  if (err) {
    res.status(400).json({ error: 'survay is not valid' });
    return;
  }

  if (user.credits < survay.recipients.lenght) {
    res.status(400).json({ message: 'Not enough credits' });
    return;
  }

  res.status(200).send();
});

router.post('/webhook', (req, res) => {
  res.status(200).send();
});

export default router;
