const debug = require('debug')('mattermoster:express');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const i18n = require("i18n");

const indexRouter = require('./routes/index');
const pluginRouter = require('./routes/plugins');

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

/**
 * ROUTES
 */

app.use('/', indexRouter);
app.use('/', pluginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  debug('ERROR: ' + err.message);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ msg: 'error'});
});

module.exports = app;