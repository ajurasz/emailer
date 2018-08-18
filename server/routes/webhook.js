import express from 'express';
import { URL } from 'url';
import UrlPattern from 'url-pattern';

import Survey from '../models/survey';

const router = express.Router();
const pattern = new UrlPattern('/feedback/:surveyId/:choice');

router.post('/', (req, res) => {
  console.log('Received new events');
  (req.body || [])
    .filter(onlyClicks)
    .map(extract)
    .filter(removeEmpty)
    .forEach(Survey.updateStats);

  res.status(200).send();
});

const onlyClicks = ({ event }) => event === 'click';

const extract = ({ email, url }) => {
  const match = pattern.match(new URL(url).pathname);
  if (match) {
    return {
      email,
      ...match
    };
  }
};

const removeEmpty = event => event;

export default router;
