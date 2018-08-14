import express from 'express';

const router = express.Router();

router.get('/:surveyId/:choice', (req, res) => {
  const { surveyId, choice } = req.params;
  console.log(surveyId, choice);
  res.redirect(`${process.env.DOMAIN}/thanks`);
});

export default router;
