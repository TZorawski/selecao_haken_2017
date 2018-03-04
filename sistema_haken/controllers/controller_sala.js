var Sala = require('../models/model_sala');

exports.listar = function() {
  var sql = "SELECT * FROM Sala";

  db.query(sql, function(err, result) {
  });
}
