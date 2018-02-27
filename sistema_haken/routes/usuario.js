var express = require('express');
var router = express.Router();

// Abre pagina cadastro de usuários.
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro');
});

// Abre pagina cadastro de login.
router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
