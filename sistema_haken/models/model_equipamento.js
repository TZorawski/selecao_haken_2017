
function equipamento (identificador, dataCompra, descricao, status, campusOrigem, login){
	var self = this;
	this.identificadorLocal = identificador;
	this.dataCompraLocal = dataCompra;
	this.descricaoLocal = descricao;
	this.statusLocal = status;
	this.campusOrigemLocal = campusOrigem;
	this.loginLocal = login;

	return{
		getIdentificador : function(){
			return self.identificadorLocal;
		},
		getDataCompra : function(){
			return self.dataCompraLocal;
		},
		getDescricao : function(){
			return self.descricaoLocal;
		},
		getStatus : function(){
			return self.statusLocal;
		},
		getCampusOrigem : function(){
			return self.campusOrigemLocal;
		},
		getLogin : function(){
			return self.loginLocal;
		},
		setIdentificador : function(newIdentificador){
			self.identificadorLocal = newIdentificador;
		},
		setDataCompra : function(newDataCompra){
			self.dataCompraLocal = newDataCompra;
		},
		setDescricao : function(newDescricao){
			self.descricaoLocal = newDescricao;
		},
		setStatus : function(newStatus){
			self.statusLocal = newStatus;
		},
		setCampusOrigem : function(newCampusOrigem){
			self.campusOrigemLocal = newCampusOrigem;
		},
		setLogin : function(newLogin){
			self.loginLocal = newLogin;
		}
	}
};

module.exports = equipamento;