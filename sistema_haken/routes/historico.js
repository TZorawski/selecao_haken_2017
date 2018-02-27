var express = require('express');
var router = express.Router();

// Abre página de histórico.
router.get('/', function(req, res, next) {
  res.render('historico');
});

module.exports = router;
