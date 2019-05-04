import express from 'express';

const router = express.Router();

router.get('/getTime', function(req, res, next) {

  res.send({time: Date.now()});
});

export default router;
