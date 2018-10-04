var express = require('express');
var app = express();

app.get('/parentesis/:entrada', function (req, res) {
    var balanceado = validarParentesis(req.params.entrada);
    res.send(balanceado);
});

app.listen(3000, function () {
  console.log('Escuchando en el puerto 3000!');
});


function validarParentesis(string){
    var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}