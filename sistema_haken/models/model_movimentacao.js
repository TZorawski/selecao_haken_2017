function Movimentacao (identificador, data, campus, equipamento, sala, login){
	var self= this;
	this.identificador = identificador;
	this.data = data;
	this.campus = campus;
	this.equipamento = equipamento;
	this.sala = sala;
	this.login = login;

	return {
		getIdentificador : function(){
			return self.identificador;
		},
		getData : function(){
			return self.data;
		},
		getCampus : function(){
			return self.campus;
		},
		getEquipamento : function(){
			return self.equipamento;
		},
		getSala : function(){
			return self.sala;
		},
		getLogin : function(){
			return self.login;
		},
		setIdentificador : function(identificador){
			self.identificador = identificador;
		},
		setData : function(data){
			self.data = data;
		},
		setCampus : function(campus){
			self.campus = campus;
		},
		setEquipamento : function(equipamento){
			self.equipamento = equipamento;
		},
		setSala : function(sala){
			self.sala = sala;
		},
		setLogin : function(login){
			self.login = login;
		}
	}
};

module.exports = Movimentacao;

