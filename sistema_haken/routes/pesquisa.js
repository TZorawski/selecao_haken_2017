var express = require('express');
var router = express.Router();

// Abre página de pesquisa.
router.get('/', function(req, res, next) {
  res.render('pesquisa');
});

module.exports = router;
