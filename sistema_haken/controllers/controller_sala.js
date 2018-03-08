var controller_equipamento = require('./controller_equipamento');
var controller_sala = require('./controller_sala');

exports.listar = function(callback) {
	var sql = "SELECT * FROM sala";

	db.query(sql, callback);
}

exports.criar_post = function(req, res, next) {
	var post = req.body;
	var sql = "INSERT INTO sala SET identificador = UPPER('" + post.bloco + post.numero + "'), numero = '" + post.numero + "', bloco = UPPER('" + post.bloco + "'), login = '1921860'";

	var messtatus = 'danger';
  var mes;

	db.query(sql, function(err, results) {
		if(err == null) {
      messtatus = 'success';
      mes = 'Sala Inserida com Sucesso.';
		}
		else if (err.code == 'ER_DUP_ENTRY') mes = 'Erro na Inserção. Sala já Inserida.';
		else if(err) mes = 'Erro na Inserção da Sala.';

		controller_sala.listar(function(err, resultsSala) {
			res.render('cadastros', {
	     		title: 'Salas/Laboratórios',
					usuario: 'Vitor',
	      	scriptButton: '#cad-sala',
	      	scriptTab: '#sala-tab',
	        dataSala: resultsSala,
	      	message_status: messtatus,
	      	message: mes
	    });
		});
	});
}

exports.remover_get = function(req, res, next) {
  var id  = req.params.id;

  var sql = "DELETE FROM sala WHERE identificador = '" + id + "'";
  var messtatus = 'danger';
  var mes;

  db.query(sql, function (err, result) {
    if(err == null) {
      messtatus = 'success';
      mes = 'Sala apagada com Sucesso.';
    }
    else if(err) mes = 'Erro na Remoção.';

    controller_equipamento.listar(function(err, resultsEquip) {
      controller_sala.listar(function(err, resultsSala) {
        res.render('pesquisa', {
					usuario: 'Vitor',
          scriptEdit: '',
          dataEquipamento: resultsEquip,
          dataSala: resultsSala,
          message_status: messtatus,
          message: mes,
          dataEquipEdit: '',
          dataSalaEdit: ''
        });
      });
    });
  });
}

exports.edicao_get = function(req, res, next) {
  var id  = req.params.id;

	var sql = 'SELECT * FROM sala WHERE identificador = "' + id + '"';
	db.query(sql, function(err, results) {

		controller_equipamento.listar(function(err, resultsEquip) {
	    controller_sala.listar(function(err, resultsSala) {
	      db.query(sql, function(err, results) {
	        res.render('pesquisa', {
	          usuario: 'Vitor',
	          scriptEdit: '#editSala',
	          dataEquipamento: resultsEquip,
	          dataSala: resultsSala,
	          message_status: '',
	          message: '',
	          dataEquipEdit: '',
	          dataSalaEdit: results
	        });
	      });
	    });
	  });
	});
}

exports.editar_post = function (req, res, next) {
	var post = req.body;

	var sql = "UPDATE sala SET identificador = '" + post.bloco + post.numero + "', bloco = '" + post.bloco + "', numero = '" + post.numero + "' WHERE identificador = '" + post.identificador + "'";
	var messtatus = 'danger';
	var mes;

	db.query(sql, function(err, results) {
		if(err == null) {
      messtatus = 'success';
      mes = 'Registro editado com Sucesso.';
    }
    else if(err) mes = 'Erro na Edição.';

		controller_equipamento.listar(function(err, resultsEquip) {
      controller_sala.listar(function(err, resultsSala) {
        res.render('pesquisa', {
          usuario: 'Vitor',
          scriptEdit: '',
          dataEquipamento: resultsEquip,
          dataSala: resultsSala,
          message_status: messtatus,
          message: mes,
          dataEquipEdit: '',
          dataSalaEdit: ''
        });
      });
    });
	});
}
