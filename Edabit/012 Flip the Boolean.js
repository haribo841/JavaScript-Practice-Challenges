//Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
function reverse(bool) {
    if (typeof (bool) === "boolean") return !bool;
    return "boolean expected";
}
const Test = require('../testHelper.js');
Test.assertEquals(reverse(false), true)
Test.assertEquals(reverse(true), false)
Test.assertEquals(reverse(0), "boolean expected")
Test.assertEquals(reverse(null), "boolean expected")
Test.assertEquals(reverse(undefined), "boolean expected")
Test.assertEquals(reverse({}), "boolean expected")
console.log(reverse());