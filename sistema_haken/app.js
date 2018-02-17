var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//GET página inicial
app.get('/', function(req, res) {
    res.render('index');
});

//GET página pesquisa
app.get('/pesquisa', function(req, res) {
    res.render('pesquisa');
});

//GET página cadastro equipamento
app.get('/cad_equipamento', function(req, res) {
    res.render('cadastros', {
      title: 'Equipamentos',
      scriptButton: '#cad-equipamento',
      scriptTab: '#equipamento-tab'
    });
});

//GET página cadastro sala
app.get('/cad_sala', function(req, res) {
    res.render('cadastros', {
      title: 'Salas/Laboratórios',
      scriptButton: '#cad-sala',
      scriptTab: '#sala-tab'
    });
});

//GET página movimentação
app.get('/movimentacao', function(req, res) {
    res.render('movimentacao');
});

//GET página empréstimos
app.get('/emprestimos', function(req, res) {
    res.render('emprestimos');
});

//GET página relatório
app.get('/relatorio', function(req, res) {
    res.render('relatorio');
});

//GET página histórico
app.get('/historico', function(req, res) {
    res.render('historico');
});

//GET página cadastro
app.get('/cadastro', function(req, res) {
    res.render('cadastro');
});

//GET página login
app.get('/login', function(req, res) {
    res.render('login');
});

//GET página esqueceu senha
app.get('/esqueceu_senha', function(req, res) {
    res.render('esqueceu_senha');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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
  res.render('page-500');
});

module.exports = app;
