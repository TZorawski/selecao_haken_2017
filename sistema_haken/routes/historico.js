var express = require('express');
var router = express.Router();

// Abre página de histórico.
router.get('/', function(req, res, next) {
  /* if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  } */

  res.render('historico', {
    usuario: 'Vitor' //req.session.nome
  });
});

module.exports = router;
