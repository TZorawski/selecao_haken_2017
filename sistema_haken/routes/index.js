var express = require('express');
var router = express.Router();

// Abre pagina principal.
router.get('/', function(req, res, next) {
  if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  }

  res.render('index', {
    usuario: req.session.nome
  });
});

module.exports = router;
