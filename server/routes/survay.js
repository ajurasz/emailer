import express from 'express';
import to from '../helpers/to';

import Survay from '../models/survey';
import sendEmail from '../services/mail';
import { survayTemplate } from '../helpers/emailTemplates';

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

  const recipientsCount = survay.recipients.length;

  if (user.credits < recipientsCount) {
    res.status(400).json({ message: 'Not enough credits' });
    return;
  }

  sendEmail(survay, survayTemplate(survay))
    .then(_ => survay.save())
    .then(_ => {
      user.subtractCredits(recipientsCount);
      return user.save();
    })
    .then(_ => res.status(200).send())
    .catch(err => res.status(500).json({ error: err }));
});

router.post('/webhook', (req, res) => {
  res.status(200).send();
});

export default router;
