var controller_equipamento = require('./controller_equipamento');

exports.listar = function(req, res, next) {
  var id  = req.params.id;

  var sql = "SELECT movimentacao.*, DATE_FORMAT(data,'%d/%m/%Y') AS data, usuario.nome FROM movimentacao INNER JOIN usuario ON movimentacao.login = usuario.login WHERE movimentacao.equipamento = '" + id + "' ORDER BY identificador DESC;";

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
