var controller_equipamento = require('./controller_equipamento');
var controller_sala = require('./controller_sala');

exports.listar = function (callback) {
  var sql = "SELECT *, DATE_FORMAT(data_compra,'%d/%m/%Y') AS data_compra FROM Equipamento";

  db.query(sql, callback);
};

exports.criar_post = function(req, res, next) {
  var post  = req.body;

  var sql = "INSERT INTO Equipamento SET data_compra = STR_TO_DATE('" + post.data + "', '%d/%m/%Y'), identificador = '" + post.identificador + "', descricao = '" + post.descricao + "', status = 0, campus_origem = '" + post.origem + "', login = '1921924'";
  var sqlM = "INSERT INTO Movimentacao SET identificador = null, data = NOW(), campus = 'Campo Mourão', equipamento = '" + post.identificador + "', sala = '" + post.localizacao + "', login = '1921924'";
  var messtatus = 'danger';
  var mes;

  db.query(sql, function(err, result) {
    if(err == null) {
      messtatus = 'success';
      mes = 'Registro Inserido com Sucesso.';
      db.query(sqlM);
    }
    else if (err.code == 'ER_DUP_ENTRY') mes = 'Erro na Inserção. Equipamento já Inserido.';
    else if(err) mes = 'Erro na Inserção.';

    controller_sala.listar(function(err, resultsSala) {
      res.render('cadastros', {
        usuario: 'Vitor',
        title: 'Equipamentos',
        scriptButton: '#cad-equipamento',
        scriptTab: '#equipamento-tab',
        dataSala: resultsSala,
        message_status: messtatus,
        message: mes
      });
    });
  });
}

exports.remover_get = function(req, res, next) {
  var id  = req.params.id;

  var sql = "DELETE FROM Equipamento WHERE identificador = '" + id + "'";
  var messtatus = 'danger';
  var mes;

  db.query(sql, function (err, result) {
    if(err == null) {
      messtatus = 'success';
      mes = 'Equipamento apagado com Sucesso.';
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

  var sql = "SELECT *, DATE_FORMAT(data_compra,'%d/%m/%Y') AS data_compra FROM Equipamento where identificador =  " + id;

  controller_equipamento.listar(function(err, resultsEquip) {
    controller_sala.listar(function(err, resultsSala) {
      db.query(sql, function(err, results) {
        res.render('pesquisa', {
          usuario: 'Vitor',
          scriptEdit: '#editEquipamento',
          dataEquipamento: resultsEquip,
          dataSala: resultsSala,
          message_status: '',
          message: '',
          dataEquipEdit: results,
          dataSalaEdit: ''
        });
      });
    });
  });
}

exports.editar_post = function(req, res, next) {
  var post = req.body;
  console.log("alo", req.body);

  var sql = "UPDATE Equipamento SET data_compra = STR_TO_DATE('" + post.data + "', '%d/%m/%Y'), campus_origem = '" + post.origem + "', descricao = '" + post.descricao + "' WHERE identificador = '" + post.identificador + "'";
  var messtatus = 'danger';
  var mes;

  db.query(sql, function(err, results) {
    console.log("oi", results);
    console.log("ola", results.affectedRows);
    if(results.affectedRows > 0) {
      messtatus = 'success';
      mes = 'Registro editado com Sucesso.';
    }
    else mes = 'Erro na Edição.';

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
