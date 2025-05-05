//Create a function that takes a string and returns it as an integer.
function stringInt(str) {
    return parseInt(str);
}
const Test = require('../testHelper.js');
Test.assertEquals(stringInt("6"), 6)
Test.assertEquals(stringInt("2"), 2)
Test.assertEquals(stringInt("10"), 10)
Test.assertEquals(stringInt("666"), 666)