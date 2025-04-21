//Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
    return s.length === 0;
}
const Test = require('../testHelper.js');
Test.assertEquals(isEmpty(""), true)
Test.assertEquals(isEmpty(" "), false)
Test.assertEquals(isEmpty("            "), false)
Test.assertEquals(isEmpty("38215"), false)
Test.assertEquals(isEmpty("afjabsdf"), false)
Test.assertEquals(isEmpty("!?@&"), false)