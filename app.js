const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// factories instances
const authenticationFactory = require('./server/core/authentication/factory').instance();
const ormFactory = require('./server/core/orm/factory').instance();
const handlerFactory = require('./server/core/handlers/factory').instance();
// routes
const index = require('./server/routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// this will sync db for starting.
app.locals.db = ormFactory.start();
// initialize authentication
app.use(authenticationFactory.initialize());

// http handler
app.use(handlerFactory.httpHandler);

// use routes
app.use('/', index);

// exception handler
app.use(handlerFactory.exceptionHandler);

/* // catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}); */

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    console.log(err.message);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

