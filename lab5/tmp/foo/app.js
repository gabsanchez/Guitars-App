var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require('mongodb').MongoClient


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cors = require('cors')
var db
MongoClient.connect('mongodb://localhost:27017/guitars',  (err, database) => {
  // ... start the server
    if(err) return console.error(err);
    db = database;
  })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(cors());

let guitars;

app.get('/guitars', (req, res, next) => {
    var docs = db.collections("instruments").find();
    res.status(200)
    res.send(docs)
})

app.post('/guitar/add', (req, res) => {
  guitars.push(req.body);
  res.status(200)
  res.send(guitars);
});

app.put('/guitar/edit/:id', (req, res) => {
  let ind = -1;
  let g = {}
  guitars.forEach((guitar, index) => {
    if(guitar.id.toString() === req.params.id){
      ind = index;
      g = req.body;
      return;
    }
  });
  guitars[ind] = g;
  res.status(200);
  res.send(guitars);
});

app.delete('/guitar/delete/:id', (req, res) => {
  let ind = -1;
  guitars.forEach((guitar, index) => {
    if(guitar.id.toString() === req.params.id){
      ind = index;
      return;
    }
  });
  guitars.splice(ind, 1);
  res.status(200);
  res.send(guitars);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app

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
