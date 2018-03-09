const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306, //	Porta padrão do mysql
	user: 'root',
	password: '',
	database: 'sistema_haken'
});

connection.connect(function(err) {
	if(err) return console.log(err);
	console.log('conectado!');
});

module.exports = connection;
