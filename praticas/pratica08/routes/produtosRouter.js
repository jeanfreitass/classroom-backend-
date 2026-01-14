const express = require('express');
const {verificarToken} = require ('../middlewares/auth')
const router = express.Router();

router.get('/produtos',verificarToken, function(req, res, next) {
  return res.status(200).json([])
});

module.exports = router;
