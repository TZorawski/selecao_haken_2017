//Usuario model

var Usuario= function (login, nome, senha) {
    // Private variables and functions that only
    // ..other private or public functions may access
    // ..and cannot be accessed outside this Module
    var login= login;
    var nome= nome;
    var senha= senha;

    // All the properties and methods contained by
    // ..this object being returned will be public
    // ..and will be accessible in the global scope.
    return {
        getNome: function (login){
            return 'nome de teste';
        }

        getLogin: function (nome){
            return 'login de teste';
        }

    }
}
