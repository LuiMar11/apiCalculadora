const express = require('express');
const app = express();
const operaciones = require('./operaciones')
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.send('Api Calculadora');
})

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/index', (req, res) => {
  let result = req.body.resultado;
  console.log(result);
  res.send(result);
})


app.get('/suma/:num1/:num2', function (req, res) {
  var num1 = parseFloat(req.params.num1);
  var num2 = parseFloat(req.params.num2);
  var suma = operaciones.suma(num1,num2).toString();
  res.send(suma);
})

app.get('/resta/:num1/:num2', function (req, res) {
  var num1 = parseFloat(req.params.num1);
  var num2 = parseFloat(req.params.num2);
  var resta = operaciones.resta(num1,num2).toString();
  res.send(resta);
})

app.get('/multiplicacion/:num1/:num2', function (req, res) {
  var num1 = parseFloat(req.params.num1);
  var num2 = parseFloat(req.params.num2);
  var mutiplicacion = operaciones.multiplicacion(num1,num2).toString()
  res.send(mutiplicacion);
})

app.get('/division/:num1/:num2', function (req, res) {
  var num1 = parseFloat(req.params.num1);
  var num2 = parseFloat(req.params.num2);
  var division = operaciones.division(num1,num2).toString()
  res.send(division);
})

app.listen(3000, function () {
  console.log('Server online');
})