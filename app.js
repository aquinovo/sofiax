var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
//tablas
var usuario = require('./routes/usuario');
var escritorio = require('./routes/escritorio');
var tarea = require('./routes/tarea');
var tema = require('./routes/tema');
var escritorio_perfil = require('./routes/escritorio_perfil');
var reto = require('./routes/reto');
var subtema = require('./routes/subtema');
var trivia = require('./routes/trivia');
var avatar = require('./routes/avatar');
var bloque = require('./routes/bloque');
var herramienta = require('./routes/herramienta');
var respuesta = require('./routes/respuesta');

//

var connection = require('./connection');

var app = express();
app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'));
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));

connection.init();

app.use('/', routes);
app.use('/usuario', usuario);
app.use('/escritorio', escritorio);
app.use('/tarea', tarea);
app.use('/tema', tema);
app.use('/escritorio_perfil', escritorio_perfil);
app.use('/reto', reto);
app.use('/subtema', subtema);
app.use('/trivia', trivia);
app.use('/avatar', avatar);
app.use('/bloque', bloque);
app.use('/herramienta', herramienta);
app.use('/respuesta', respuesta);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
