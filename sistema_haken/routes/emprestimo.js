var express = require('express');
var router = express.Router();

// Abre página de empréstimos.
router.get('/', function(req, res, next) {
  res.render('emprestimos');
});

module.exports = router;
