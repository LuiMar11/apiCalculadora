const express = require('express');
const app = express();
const operaciones = require('./operaciones')

app.get('/', function (req, res) {
  res.send('Api Calculadora');
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