const divisible = require('divisible')
const isNumber = require('is-number');

module.exports = function(number, divisorGood, divisorBad) {
  if (isNumber(number) && isNumber(divisorGood) && isNumber(divisorBad)){
    return divisible(number, divisorGood) && !divisible(number, divisorBad);
  } else {
    throw "All inputs must be numbers";
  }
}
