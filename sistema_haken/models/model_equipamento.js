
var equipamento = function(identificador, dataCompra, descricao, status, campusOrigem, login){

	var identificadorLocal = identificador;
	var dataCompraLocal = dataCompra;
	var descricaoLocal = descricao;
	var statusLocal = status;
	var campusOrigemLocal = campusOrigem;
	var loginLocal = login;

	this.getIdentificador = function(){
		return identificadorLocal;
	}
	this.getDataCompra = function(){
		return dataCompraLocal;
	}
	this.getDescricao = function(){
		return descricaoLocal;
	}
	this.getStatus = function(){
		return statusLocal;
	}
	this.getCampusOrigem = function(){
		return campusOrigemLocal;
	}
	this.getLogin = function(){
		return loginLocal;
	}
	this.setIdentificador = function(newIdentificador){
		identificadorLocal = newIdentificador;
	}
	this.setDataCompra = function(newDataCompra){
		dataCompraLocal = newDataCompra;
	}
	this.setDescricao = function(newDescricao){
		descricaoLocal = newDescricao;
	}
	this.setStatus = function(newStatus){
		statusLocal = newStatus;
	}
	this.setCampusOrigem = function(newCampusOrigem){
		campusOrigemLocal = newCampusOrigem;
	}
	this.setLogin = function(newLogin){
		loginLocal = newLogin;
	}
};