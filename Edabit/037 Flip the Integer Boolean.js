//Create a function that returns the opposite of the given boolean, as a number.
function flipBool(b) {
    return b ? 0 : 1;
}
const Test = require('../testHelper.js');
Test.assertEquals(flipBool(1), 0)
Test.assertEquals(flipBool(true), 0)
Test.assertEquals(flipBool(0), 1)
Test.assertEquals(flipBool(false), 1)