var express = require('express');
var router = express.Router();

// Abre página de relatório.
router.get('/', function(req, res, next) {
  res.render('relatorio');
});

module.exports = router;
