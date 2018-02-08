var equip = require('../models/model_equipamento');

var newEquip = new equip('AAAAAA', '08312016', 'Testezinho', 'Disponível', 'Curitiba', 'GOrd');

console.log(newEquip.getIdentificador()); // AAAAAA
newEquip.setIdentificador('BBBBBB'); // It's OK
console.log(newEquip.getIdentificador()); // BBBBBB

console.log(newEquip.getDataCompra()); // 08312016
newEquip.setDataCompra('09112001'); // It's OK
console.log(newEquip.getDataCompra()); // 09112001

console.log(newEquip.getDescricao()); // Testezinho
newEquip.setDescricao('Testezão'); // It's OK
console.log(newEquip.getDescricao()); // Testezão

console.log(newEquip.getStatus()); // Disponível
newEquip.setStatus('Indisponível'); // It's OK
console.log(newEquip.getStatus()); // Indisponível

console.log(newEquip.getCampusOrigem()); // Curitiba
newEquip.setCampusOrigem('Toledo'); // It's OK
console.log(newEquip.getCampusOrigem()); // Toledo

console.log(newEquip.getLogin()); // GOrd
newEquip.setLogin('ogoes17'); // It's OK
console.log(newEquip.getLogin()); // ogoes17

var Equip = new equip(123, 1244, 45645, 567, 789, 5);
console.log(Equip.getIdentificador());
console.log(Equip.getDataCompra());
console.log(Equip.getDescricao());
console.log(Equip.getStatus());
console.log(Equip.getCampusOrigem());
console.log(Equip.getLogin());

// All right