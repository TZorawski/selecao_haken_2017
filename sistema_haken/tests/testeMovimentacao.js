var moves = require('../models/model_movimentacao');

var newMoves = new moves('111', '08312016', 'Camourão', 'AAAAAA', 'E001', 'GOrd');

console.log(newMoves.getIdentificador()); // 111
newMoves.setIdentificador('222'); // It's OK
console.log(newMoves.getIdentificador()); // 222

console.log(newMoves.getData()); // 08312016
newMoves.setData('09112001'); // It's OK
console.log(newMoves.getData()); // 09112001

console.log(newMoves.getCampus()); // Camourão
newMoves.setCampus('Curitiba'); // It's OK
console.log(newMoves.getCampus()); // Curitiba

console.log(newMoves.getEquipamento()); // AAAAAA
newMoves.setEquipamento('BBBBBB'); // It's OK
console.log(newMoves.getEquipamento()); // BBBBBB

console.log(newMoves.getSala()); // E001
newMoves.setSala('E007'); // It's OK
console.log(newMoves.getSala()); // E007

console.log(newMoves.getLogin()); // GOrd
newMoves.setLogin('ogoes17'); // It's OK
console.log(newMoves.getLogin()); // ogoes17

var Mov = new moves(777, 6666666666, 234221, 456456, 456456, 34234);

console.log(Mov.getIdentificador());
console.log(Mov.getData());
console.log(Mov.getCampus());
console.log(Mov.getEquipamento());
console.log(Mov.getSala());
console.log(Mov.getLogin());

// All right