var controller_equipamento = require('./controller_equipamento');
var controller_sala = require('./controller_sala');

exports.listar = function(req, res, next) {
  var id  = req.params.id;

  var sql = "SELECT movimentacao.*, DATE_FORMAT(data,'%d/%m/%Y') AS data, usuario.nome FROM movimentacao INNER JOIN usuario ON movimentacao.login = usuario.login WHERE movimentacao.equipamento = '" + id + "' ORDER BY identificador DESC";

  controller_equipamento.listar(function(err, resultsEquip) {
    db.query(sql, function(err, results) {
      res.render('historico', {
        usuario: 'Vitor', //req.session.nome
        dataEquipamento: resultsEquip,
        dataMovimento: results
      });
    });
  });
};

exports.mover = function(req, res, next) {
  var lista_id = req.body.ids.split(',');
  var lista_sala = req.body.salas.split(',');
  var sala = req.body.localizacao;
  var sql = '', sqlM = '', count = 0;

  for(var i = 0; i < lista_id.length; i++) {
    if(lista_sala[i] != sala) {
      if(count == 0) {
        sql = "UPDATE equipamento SET loc_sala = '" + sala + "' WHERE identificador = " + lista_id[i] + "";
        sqlM = "INSERT INTO movimentacao VALUES (null, NOW(), 'Campo Mourão', " + lista_id[i] + ", '" + sala + "', '1921860')";
        count ++;
      } else {
        sql += " OR identificador = " + lista_id[i] + "";
        sqlM += ", (null, NOW(), 'Campo Mourão', " + lista_id[i] + ", '" + sala + "', '1921860')";
      }
    }
  }

  if(count > 0) {
    db.query(sql, function(err, results) {
      db.query(sqlM, function(erro, resultsMovimentacao) {
        controller_equipamento.listar(function(err, resultsEquip) {
          controller_sala.listar(function(err, resultsSala) {
            res.render('movimentacao', {
              usuario: 'Vitor',  //req.session.nome
              dataEquipamento: resultsEquip,
              dataSala: resultsSala,
              dataEscolhidos: '',
              message_status: 'success',
              message: 'Equipamentos movidos com sucesso.',
              scriptMov: ''
            });
          });
        });
      });
    });
  }
};


exports.emprestar = function(req, res, next) {
  var lista_id = req.body.id.split(',');
  var lista_campus = req.body.localizacao;

  var sqlM = '', sql = '';
  var sql = '', sqlM = '', count = 0;



  for(var i = 0; i < lista_id.length; i++) {
    if(lista) {
      if(count == 0) {
        sql = sql = "UPDATE equipamento SET loc_sala = " + null + ", compus_origem = ""  WHERE campus_origem = " + lista_campus[0];
        sqlM = "INSERT INTO movimentacao VALUES (null, NOW(), '" + lista_campus[i] + "', " + lista_id[i] + ", null, '1921860')";
        count ++;
      } else {
        sql += " OR identificador = " + lista_id[i] + "";
        sqlM += ", (null, NOW(), '" + lista_campus[i] + "', " + lista_id[i] + ", null, '1921860')";
      }
    }
  }

  db.query(sql, function(err, result){
    res.render('emprestimos', {
      usuario: 'Vitor', //req.session.nome
      dataEquipamento: resultsEquip,
      dataEscolhidos: '',
      message_status: '',
      message: '',
      scriptEmp: ''
    });
  });
};
