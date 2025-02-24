//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
   return num + 1;
}
const Test = require('../testHelper.js');
Test.assertEquals(addition(2), 3, "2 plus 1 equals 3.")
Test.assertEquals(addition(-9), -8, "-8 plus 1 equals -9.")
Test.assertEquals(addition(0), 1, "0 plus 1 equals 1.")
Test.assertEquals(addition(999), 1000, "999 plus 1 equals 1000.")
Test.assertEquals(addition(73), 74, "73 plus 1 equals 74.")
console.log(addition());