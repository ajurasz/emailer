import express from 'express';

const router = express.Router();

router.get('/:surveyId/:choice', (req, res) => {
  res.redirect(`${process.env.DOMAIN}/thanks`);
});

export default router;
