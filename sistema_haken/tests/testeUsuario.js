var user = require('../models/usuario');

var newUser = new user('GOrd', 'Bahia', 'acaraje12');

console.log(newUser.getLogin()); // GOrd
newUser.setLogin('ogoes17'); // It's OK
console.log(newUser.getLogin()); // ogoes17

console.log(newUser.getNome()); // Bahia
newUser.setNome('CJ'); // It's OK
console.log(newUser.getNome()); // CJ

console.log(newUser.getSenha()); // acaraje12
newUser.setSenha('capoeira21'); // It's OK
console.log(newUser.getSenha()); // capoeira21

var usuario = new user(123, 254, 7867);

console.log(usuario.getLogin());
console.log(usuario.getNome()); 
console.log(usuario.getSenha()); 

// All right