var express = require('express');
var app = express();

app.get('/hola/:nombre', function (req, res) {
    res.send('Hola ' + req.params.nombre);
});

app.listen(3000, function () {
    console.log('Escuchando en el puerto 3000!');
  });