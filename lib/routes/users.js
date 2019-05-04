import express from 'express';
import config from '../../config.js';

const router = express.Router();

router.get('/getUsers', function(req, res, next) {
  // GET/users/ route
  res.send({name: config.admin.name});
});

export default router;
