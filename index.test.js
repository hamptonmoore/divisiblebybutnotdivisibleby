let divisiblebybutnotdivisibleby = require("./index.js");

function testCase(number, divisorGood, divisorBad, expected){
    let output = divisiblebybutnotdivisibleby(25, 5, 10);
    console.log(`${number} is divisble by ${divisorGood} but not divisible by ${divisorBad}, expected == ${expected}, actual == ${output}`);
}

testCase(10, 2, 9, true);
testCase(15, 5, 4, true);
testCase(15, 9, 4, false);