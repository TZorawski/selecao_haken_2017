var Movimentacao = require('../models/model_movimentacao')
//var async = require('async')

/*
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display Movimentacao create form on GET.
exports.movimentacao_create_get = function (req, res, next) {
    res.render('movimentacao_form', { title: 'Create Movimentacao' });
};

// Handle Movimentacao create on POST.
exports.movimentacao_create_post = [

    // Validate fields.
    body('first_name').isLength({ min: 1 }).trim().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').isLength({ min: 1 }).trim().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601(),

    // Sanitize fields.
    sanitizeBody('first_name').trim().escape(),
    sanitizeBody('family_name').trim().escape(),
    sanitizeBody('date_of_birth').toDate(),
    sanitizeBody('date_of_death').toDate(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('movimentacao_form', { title: 'Create Movimentacao', movimentacao: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Movimentacao object with escaped and trimmed data.
            var movimentacao = new Movimentacao(
                {
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    date_of_birth: req.body.date_of_birth,
                    date_of_death: req.body.date_of_death
                });
            movimentacao.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new movimentacao record.
                res.redirect(movimentacao.url);
            });
        }
    }
];

*/

/*
// Display list of all Movimentacaos.
exports.movimentacao_list = function (req, res, next) {

    Movimentacao.find()
        .sort([['family_name', 'ascending']])
        .exec(function (err, list_movimentacaos) {
            if (err) { return next(err); }
            // Successful, so render.
            res.render('movimentacao_list', { title: 'Movimentacao List', movimentacao_list: list_movimentacaos });
        })

};

// Display detail page for a specific Movimentacao.
exports.movimentacao_detail = function (req, res, next) {

    async.parallel({
        movimentacao: function (callback) {
            Movimentacao.findById(req.params.id)
                .exec(callback)
        },
        movimentacaos_books: function (callback) {
            Book.find({ 'movimentacao': req.params.id }, 'title summary')
                .exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.movimentacao == null) { // No results.
            var err = new Error('Movimentacao not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('movimentacao_detail', { title: 'Movimentacao Detail', movimentacao: results.movimentacao, movimentacao_books: results.movimentacaos_books });
    });

};


// Display Movimentacao delete form on GET.
exports.movimentacao_delete_get = function (req, res, next) {

    async.parallel({
        movimentacao: function (callback) {
            Movimentacao.findById(req.params.id).exec(callback)
        },
        movimentacaos_books: function (callback) {
            Book.find({ 'movimentacao': req.params.id }).exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); }
        if (results.movimentacao == null) { // No results.
            res.redirect('/catalog/movimentacaos');
        }
        // Successful, so render.
        res.render('movimentacao_delete', { title: 'Delete Movimentacao', movimentacao: results.movimentacao, movimentacao_books: results.movimentacaos_books });
    });

};

// Handle Movimentacao delete on POST.
exports.movimentacao_delete_post = function (req, res, next) {

    async.parallel({
        movimentacao: function (callback) {
            Movimentacao.findById(req.body.movimentacaoid).exec(callback)
        },
        movimentacaos_books: function (callback) {
            Book.find({ 'movimentacao': req.body.movimentacaoid }).exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); }
        // Success.
        if (results.movimentacaos_books.length > 0) {
            // Movimentacao has books. Render in same way as for GET route.
            res.render('movimentacao_delete', { title: 'Delete Movimentacao', movimentacao: results.movimentacao, movimentacao_books: results.movimentacaos_books });
            return;
        }
        else {
            // Movimentacao has no books. Delete object and redirect to the list of movimentacaos.
            Movimentacao.findByIdAndRemove(req.body.movimentacaoid, function deleteMovimentacao(err) {
                if (err) { return next(err); }
                // Success - go to movimentacao list.
                res.redirect('/catalog/movimentacaos')
            })

        }
    });

};

// Display Movimentacao update form on GET.
exports.movimentacao_update_get = function (req, res, next) {

    Movimentacao.findById(req.params.id, function (err, movimentacao) {
        if (err) { return next(err); }
        if (movimentacao == null) { // No results.
            var err = new Error('Movimentacao not found');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.render('movimentacao_form', { title: 'Update Movimentacao', movimentacao: movimentacao });

    });
};

// Handle Movimentacao update on POST.
exports.movimentacao_update_post = [

    // Validate fields.
    body('first_name').isLength({ min: 1 }).trim().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').isLength({ min: 1 }).trim().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601(),

    // Sanitize fields.
    sanitizeBody('first_name').trim().escape(),
    sanitizeBody('family_name').trim().escape(),
    sanitizeBody('date_of_birth').toDate(),
    sanitizeBody('date_of_death').toDate(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Movimentacao object with escaped and trimmed data (and the old id!)
        var movimentacao = new Movimentacao(
            {
                first_name: req.body.first_name,
                family_name: req.body.family_name,
                date_of_birth: req.body.date_of_birth,
                date_of_death: req.body.date_of_death,
                _id: req.params.id
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values and error messages.
            res.render('movimentacao_form', { title: 'Update Movimentacao', movimentacao: movimentacao, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid. Update the record.
            Movimentacao.findByIdAndUpdate(req.params.id, movimentacao, {}, function (err, themovimentacao) {
                if (err) { return next(err); }
                // Successful - redirect to genre detail page.
                res.redirect(themovimentacao.url);
            });
        }
    }
];
*/
