const express = require('express');
const router = express.Router();

router.get(
  '/',
  getByQuery,
);

router.post(
  '/',
  create,
);

router.delete(
  '/',
  exclude,
);

module.exports = router;