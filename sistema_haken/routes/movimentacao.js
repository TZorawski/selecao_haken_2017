var express = require('express');
var router = express.Router();


// Obtem controllers
var movimentacao_controller = require('../controllers/controller_movimentacao');


/// ROTAS DE MOVIMENTACAO ///
/*
// GET request for creating Author. NOTE This must come before route for id (i.e. display movimentacao).
router.get('/movimentacao/create', movimentacao_controller.movimentacao_create_get);

// POST request for creating Author.
router.post('/movimentacao/create', movimentacao_controller.movimentacao_create_post);

// GET request to delete Author.
router.get('/movimentacao/:id/delete', movimentacao_controller.movimentacao_delete_get);

// POST request to delete Author
router.post('/movimentacao/:id/delete', movimentacao_controller.movimentacao_delete_post);

// GET request to update Author.
router.get('/movimentacao/:id/update', movimentacao_controller.movimentacao_update_get);

// POST request to update Author.
router.post('/movimentacao/:id/update', movimentacao_controller.movimentacao_update_post);

// GET request for one Author.
router.get('/movimentacao/:id', movimentacao_controller.movimentacao_detail);

// GET request for list of all Authors.
router.get('/movimentacaos', movimentacao_controller.movimentacao_list);
*/

module.exports = router;
