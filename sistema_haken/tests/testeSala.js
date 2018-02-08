var classroom = require('../models/Modelsala');

var newClass = new classroom('AAAA', '001', 'E', 'GOrd');

console.log(newClass.getIdentificador()); // AAAA
newClass.setIdentificador('BBBB'); // It's OK
console.log(newClass.getIdentificador()); // BBBB

console.log(newClass.getNumero()); // 001
newClass.setNumero('007'); // It's OK
console.log(newClass.getNumero()); // 007

console.log(newClass.getBloco()); // E
newClass.setBloco('F'); // It's OK
console.log(newClass.getBloco()); // F

console.log(newClass.getLogin()); // GOrd
newClass.setLogin('ogoes17'); // It's OK
console.log(newClass.getLogin()); // ogoes17

var Class = new classroom(123, 6457, 897, 234);

console.log(Class.getIdentificador());
console.log(Class.getNumero());
console.log(Class.getBloco());
console.log(Class.getLogin());

// All right