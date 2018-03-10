exports.cadastro_post = function(req, res, next) {
  var post = req.body;

	var sql = "INSERT INTO usuario VALUES('" + post.usuario + "', '" + post.nome + "', '" + post.senha + "')";

	db.query(sql, function(err, results) {
    var message = '';

    if(err) {
			console.log('erro: ' + err);
			if (err.code == 'ER_DUP_ENTRY') message = 'Usuário Já Existe.';

      res.render('cadastro', {
        message: message
      });
		} else {
			res.redirect('/usuario/login');
		}
	});
};

exports.login_post = function(req, res, next) {
  var post = req.body;
  var sess = req.session;

	var sql = "SELECT * FROM usuario WHERE login = '" + post.usuario + "' and senha = '" + post.senha + "'";

	db.query(sql, function(err, results) {
    if(results.length) {
      sess.nome = results[0].nome;
      sess.usuario = results[0].login;
      console.log("Bem Vindo", sess.usuario);

      res.redirect('/');
    } else {
      res.render('login', {
        message: 'Credenciais Erradas'
      });
    }
  });
};
