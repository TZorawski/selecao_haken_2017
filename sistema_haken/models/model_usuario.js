/****************** model usuario ******************/

function Usuario(login, nome, senha) {
	var self = this;
	this.login = login;
	this.nome = nome;
	this.senha = senha;
	return {
		setUser: function(login, nome, senha){
			self.login = login;
			self.nome = nome;
			self.senha = senha;
		},
		setLogin: function (login) {
			self.login = login;
		},
		setNome: function (nome) {
			self.nome = nome;
		},
		setSenha: function (senha) {	// Função destinada para testes
			self.senha = senha;
		},
		getUser: function() {
			return [self.login, self.nome, self.senha];

		},
		getLogin: function () {
			return self.login;
		},
		getNome: function () {
			return self.nome;
		},
		getSenha: function () {			// Função destinada para testes
			return self.senha;
		}
	}
};

module.exports = Usuario;