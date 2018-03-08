var express = require('express');
var router = express.Router();

//Obtem controllers
controller_usuario = require('../controllers/controller_usuario');

// Abre pagina cadastro de usuários.
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', {
    message: ''
  });
});

// Abre pagina cadastro de login.
router.get('/login', function(req, res, next) {
  res.render('login', {
    message: ''
  });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    res.redirect("/usuario/login");
  });
});

router.post('/cadastrarUsuario', controller_usuario.cadastro_post);

router.post('/logarUsuario', controller_usuario.login_post);

module.exports = router;
