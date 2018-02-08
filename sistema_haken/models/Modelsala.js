function Sala(identificador,numero,bloco,login){
	var self = this;
	this.identificador = identificador;
	this.numero = numero;
	this.bloco = bloco;
	this.login = login;

	return {
		getIdentificador : function(){	
			return self.identificador;
		},
		getNumero : function(){
			return self.numero;
		},
		getBloco : function(){
			return self.bloco;
		},
		getLogin : function(){
			return self.login;
		},
		setIdentificador : function(identificador){
			self.identificador = identificador;
		},
		setNumero : function(numero){
			self.numero = numero;
		},
		setBloco : function(bloco){
			self.bloco = bloco;	
		},
		setLogin : function(login){
			self.login = login;
		}
	}
};
module.exports = Sala;