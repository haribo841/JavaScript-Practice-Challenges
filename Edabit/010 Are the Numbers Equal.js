//Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
    return num1 === num2;
}
const Test = require('../testHelper.js');
Test.assertEquals(isSameNum(4, 8), false)
Test.assertEquals(isSameNum(2, 2), true)
Test.assertEquals(isSameNum(0, 6), false)
Test.assertEquals(isSameNum(2, "2"), false)
console.log(isSameNum());