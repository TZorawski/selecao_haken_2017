var controller_equipamento = require('./controller_equipamento');
var controller_sala = require('./controller_sala');

exports.listar = function(req, res, next) {
  if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  }
  var id  = req.params.id;

  var sql = "SELECT movimentacao.*, DATE_FORMAT(data,'%d/%m/%Y') AS data, usuario.nome FROM movimentacao INNER JOIN usuario ON movimentacao.login = usuario.login WHERE movimentacao.equipamento = '" + id + "' ORDER BY identificador DESC";

  controller_equipamento.listar(function(err, resultsEquip) {
    db.query(sql, function(err, results) {
      res.render('historico', {
        usuario: req.session.nome,
        dataEquipamento: resultsEquip,
        dataMovimento: results
      });
    });
  });
};

exports.mover = function(req, res, next) {
  if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  }

  var lista_id = req.body.ids.split(',');
  var lista_sala = req.body.salas.split(',');
  var sala = req.body.localizacao;
  var sql = '', sqlM = '', count = 0;

  for(var i = 0; i < lista_id.length; i++) {
    if(lista_sala[i] != sala) {
      if(count == 0) {
        sql = "UPDATE equipamento SET loc_sala = '" + sala + "' WHERE identificador = " + lista_id[i] + "";
        sqlM = "INSERT INTO movimentacao VALUES (null, NOW(), 'Campo Mourão', " + lista_id[i] + ", '" + sala + "', login = '" + req.session.usuario + "')";
        count ++;
      } else {
        sql += " OR identificador = " + lista_id[i] + "";
        sqlM += ", (null, NOW(), 'Campo Mourão', " + lista_id[i] + ", '" + sala + "', login = '" + req.session.usuario + "')";
      }
    }
  }

  if(count > 0) {
    db.query(sql, function(err, results) {
      db.query(sqlM, function(erro, resultsMovimentacao) {
        controller_equipamento.listar(function(err, resultsEquip) {
          controller_sala.listar(function(err, resultsSala) {
            res.render('movimentacao', {
              usuario: req.session.nome,
              dataEquipamento: resultsEquip,
              dataSala: resultsSala,
              dataEscolhidos: '',
              message_status: 'success',
              message: 'Equipamento(s) movido(s) com sucesso.',
              scriptMov: ''
            });
          });
        });
      });
    });
  }
};


exports.emprestar = function(req, res, next) {
  if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  }
  var lista_id = req.body.ids.split(',');
  var lista_campus = req.body.campus.split(',');
  var newLocalizacao = req.body.localizacao;
  var status = 1, sql = '', sqlM = '', count = 0;

  if(newLocalizacao == "Campo Mourão")
    status = 0;

  for(var i = 0; i < lista_id.length; i++) {
    if(lista_campus[i] != newLocalizacao) {
      if(count == 0) {
        sql = sql = "UPDATE equipamento SET loc_campus =  '" + newLocalizacao + "', status = " + status + " WHERE identificador = " + lista_id[i];
        sqlM = "INSERT INTO movimentacao VALUES (null, NOW(), '" + newLocalizacao + "', " + lista_id[i] + ", null, '" + req.session.usuario + "')";
        count ++;
      } else {
        sql += " OR identificador = " + lista_id[i] + "";
        sqlM += ", (null, NOW(), '" + newLocalizacao + "', " + lista_id[i] + ", null,'" + req.session.usuario + "')";
      }
    }
  }

  db.query(sql, function(err, results) {
    db.query(sqlM, function(erro, resultsMovimentacao) {
      controller_equipamento.listar(function(err, resultsEquip) {
        res.render('emprestimos', {
          usuario: req.session.nome,
          dataEquipamento: resultsEquip,
          dataEscolhidos: '',
          message_status: 'success',
          message: 'Emprestimo(s) realizado(s) com sucesso',
          scriptEmp: ''
        });
      });
    });
  });
};
