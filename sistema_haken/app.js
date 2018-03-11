var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var usuario = require('./routes/usuario');
var index = require('./routes/index');
var pesquisa = require('./routes/pesquisa');
var cadastros = require('./routes/cadastros');
var movimentacao = require('./routes/movimentacao');
var emprestimo = require('./routes/emprestimo');
var relatorio = require('./routes/relatorio');
var historico = require('./routes/historico');

var app = express();

var connection = require('./database-connection');
global.db = connection;

app.use(logger('dev'));
app.use(cookieParser());

app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'macho_alfa',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: new Date(Date.now() + (60 * 1000 * 15)) }
            }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

app.use('/usuario', usuario);
app.use('/', index);
app.use('/pesquisa', pesquisa);
app.use('/cadastro', cadastros);
app.use('/movimentacao', movimentacao);
app.use('/emprestimos', emprestimo);
app.use('/relatorio', relatorio);
app.use('/historico', historico);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // renderiza a página erro
  res.status(err.status || 500);
  res.render('page-500', {usuario: 'Vitor'});
});

module.exports = app;
app.listen(8080)
