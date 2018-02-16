var connection = require('../database-connection');
var usuario = require('../models/usuario');
var mysql = require('mysql');


module.exports = {
	inserir(login, nome, senha) {								// Fazer correções 
		var results = 0;
		var User = new usuario(login, nome,senha);
		var sqlQry = 'INSERT INTO usuario VALUES("' + User.getLogin() + '", "' + User.getNome() + '", "' + User.getSenha() + '")';
		connection.query(sqlQry, function(error, rows, fields){
			if(error) {
				console.log('erro: ' + error);
				if (error.code == 'ER_DUP_ENTRY') {
					console.log('usuario ja cadastrado!!!');
				}

			}
			else {
				results = rows.affectedRows;
				console.log('linhas inseridas: ' + rows.affectedRows);
			}
		});
		return results;	
	},
	atualizar(login, NovoNome, NovaSenha) {						// Fazer correções 
		
		var sqlQry = '';
		if(NovoNome && NovaSenha){			// Atualizar nome e senha
			sqlQry = 'UPDATE usuario SET nome = "' + NovoNome + '", senha = "' + NovaSenha + '" WHERE login =  "'+ login + '"';
		}

		else if(!NovoNome && NovaSenha){	// Atualizar só a senha
			sqlQry = 'UPDATE usuario SET senha = "' + NovaSenha + '" WHERE login =  "'+ login + '"';
		}

		else if(NovoNome && !NovaSenha){	// Atualizar só o nome
			sqlQry = 'UPDATE usuario SET nome = "' + NovoNome + '" WHERE login =  "'+ login + '"';
		}
		else {								// Não atualiza nada;
			console.log('nenhum dado foi passado!');
			return ;
		}
		
		if(NovoNome || NovaSenha){
			connection.query(sqlQry, function(error, rows, fields){
				if(error) throw error;
				if(rows.affectedRows == 0) {
					console.log('usuario não cadastrado!');
				}
				console.log('linhas afetadas: ' + rows.affectedRows);
			});
		}
	},
	procurar(login) {										// Fazer correções 
		// Necessario validação do login
		var sqlQry = 'SELECT login, nome FROM usuario where login = "' + login + '"';
		var linhas, colunas;
		connection.query(sqlQry, function(error, rows, fields){
			if(error) throw error;
			results = rows;
		});
		
	},
	listar() {												// listando no console
		var sqlQry = 'SELECT login, nome FROM usuario';
		connection.query(sqlQry, function(error, rows, fields){
			if (error) console.log(error);
			for (var i = 0; i < rows.length; i++) {
				for (var j = 0; j < fields.length; j++) {
					console.log(fields[j].name + ': ' + rows[i][fields[j].name]);
					if(fields.length - 1 == j)
						console.log('\r');
				}
			}
		});
	}
}


/********** No arquivo de teste **********/
/*
var users = require('./controllers/usuario_controller');
var teste;

teste = users.inserir(4, 'joinville', 'aniballs')
teste = users.atualizar(4, 'joinvile', 'anibals');
users.listar();
users.procurar(4);	
*/