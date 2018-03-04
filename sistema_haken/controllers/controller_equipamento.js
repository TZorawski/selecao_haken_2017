var Equipamento = require('../models/model_equipamento')

exports.listar = function (req, res, next) {
    var sql = "SELECT *, DATE_FORMAT(data_compra,'%d/%m/%Y') AS data_compra FROM Equipamento";

    db.query(sql, function(error, rows, fields) {
      console.log("oi", rows);
    });
};

exports.criar_post = function(req, res, next) {
    var post  = req.body;

    var sql = "INSERT INTO Equipamento SET data_compra = STR_TO_DATE('" + post.data + "', '%d/%m/%Y'), identificador = '" + post.identificador + "', descricao = '" + post.descricao + "', status = 0, campus_origem = '" + post.origem + "', login = '1921924'";

    var messtatus = 'danger';
    var mes;

    db.query(sql, function(err, result) {
        if(err == null) {

            messtatus = 'success';
            mes = 'Registro Inserido com Sucesso.';

        }
        else if (err.code == 'ER_DUP_ENTRY') mes = 'Erro na Inserção. Equipamento já Inserido.';
        else if(err) mes = 'Erro na Inserção.';

        res.render('cadastros', {
            title: 'Equipamentos',
            scriptButton: '#cad-equipamento',
            scriptTab: '#equipamento-tab',
            message_status: messtatus,
            message: mes
        });
    });
}
