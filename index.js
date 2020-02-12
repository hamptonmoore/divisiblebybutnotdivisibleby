const divisible = require('divisible')

module.exports = function(number, divisorGood, divisorBad) {
  return divisible(number, divisorGood) && !divisible(number, divisorBad);
}
