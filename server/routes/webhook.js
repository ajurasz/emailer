import express from 'express';
import { URL } from 'url';
import UrlPattern from 'url-pattern';

const router = express.Router();
const pattern = new UrlPattern('/feedback/:surveyId/:choice');

router.post('/', (req, res) => {
  const events = (req.body || [])
    .filter(onlyClicks)
    .map(extract)
    .filter(removeEmpty);

  console.log(events);
  res.status(200).send();
});

const onlyClicks = ({ event }) => event === 'click';

const extract = ({ email, url }) => {
  console.log(url);
  const match = pattern.match(new URL(url).pathname);
  console.log(match);
  if (match) {
    return {
      email,
      ...match
    };
  }
};

const removeEmpty = event => event;

export default router;
