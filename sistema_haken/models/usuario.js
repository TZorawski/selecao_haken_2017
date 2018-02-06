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

/****************** Testes ******************/
/*
var user = new Usuario('@zoooooio', 'Everton J.Abreu', '@ever1512');

console.log('user 1');

console.log('login: ' + user.getLogin());
console.log('nome: ' + user.getNome());
console.log('senha: ' + user.getSenha());

console.log('\n'+ 'user 2' + '\n');

user.setLogin('@Tzora');
user.setNome('Thais Zorawski');
user.setSenha('@tz1234');

for(var i = 0, array = user.getUser(); i < array.length; i++){
	console.log(array[i]);
}

console.log('\n' + 'user 3' + '\n');

user.setUser('@Gord', 'Otavio Goes', '@gord1234');
for(var i = 0, array = user.getUser(); i < array.length; i++){
	console.log(array[i]);
}
*/