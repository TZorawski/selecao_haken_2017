const mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306, //	Porta padrão do mysql
	user: 'seu usuario',
	password: 'Sua senha',
	database: 'sistema_haken'
});
connection.connect(function(err){
	if(err) return console.log(err);
	console.log('conectado!');
});
module.exports = connection;


/********** Exemplo de consulta **********/
/*
	var sqlQry = 'SELECT * FROM usuario';
	connection.query(sqlQry, function(error, results, fields){
		if(error) 
    		throw error;
		connection.end();
		console.log('executou!');
		console.log(results);
	});
/*
