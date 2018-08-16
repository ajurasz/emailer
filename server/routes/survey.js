import express from 'express';
import to from '../helpers/to';

import Survey from '../models/survey';
import sendEmail from '../services/mail';
import { surveyTemplate } from '../helpers/emailTemplates';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send();
});

router.post('/', async (req, res) => {
  const { user } = req;

  const [err, survey] = await to(
    Survey.createFromRequest({ ...req.body, userId: user._id })
  );

  if (err) {
    res.status(400).json({ error: 'survey is not valid' });
    return;
  }

  const recipientsCount = survey.recipients.length;

  if (user.credits < recipientsCount) {
    res.status(400).json({ message: 'Not enough credits' });
    return;
  }

  sendEmail(survey, surveyTemplate(survey))
    .then(_ => survey.save())
    .then(_ => {
      user.subtractCredits(recipientsCount);
      return user.save();
    })
    .then(_ => res.status(200).send())
    .catch(err => res.status(500).json({ error: err }));
});

export default router;
