import express from 'express';

import { chargeCC } from '../services/stripe';

const router = express.Router();

router.post('/recharge', (req, res) => {
  const { token } = req.body;

  chargeCC(token, 500, '$5 for 5 credits')
    .then(charge => {
      console.log(`charge status: ${charge.status}`);
      req.user.credits += 5;
      return req.user.save();
    })
    .then(_ => res.status(201).send())
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

export default router;
