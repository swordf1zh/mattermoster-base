const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const i18n = require("i18n");

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * i18n Localization configuration
 */
i18n.configure({
  locales:[
    'en',
    'es',
  ],
  directory: __dirname + '/locales'
});
app.use(i18n.init);
app.use((req, res, next) => {
  res.setLocale('en');
  next();
});

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

/**
 * ROUTE PLUGINS
 * Require plugins here and set routes for them.
 * Eg.:
 * const mattermosterTodo = require('mattermoster-todo');
 * app.use('/todo', mattermosterTodo);
 */


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;