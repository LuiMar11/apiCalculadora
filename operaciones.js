function suma(num1, num2) {
  var res = parseFloat(num1) + parseFloat(num2);
  return res;
}
function resta(num1, num2) {
  var res = parseFloat(num1) - parseFloat(num2);
  return res;
}
function multiplicacion(num1, num2) {
  var res = parseFloat(num1) * parseFloat(num2);
  return res;
}
function division(num1, num2) {
  if (num2 != 0) {
    var res = parseFloat(num1) / parseFloat(num2);
  }else{
    res = 'División por 0';
  }
  return res;
}

module.exports = {
    suma: suma,
    resta:resta,
    multiplicacion:multiplicacion,
    division:division
  }; 

