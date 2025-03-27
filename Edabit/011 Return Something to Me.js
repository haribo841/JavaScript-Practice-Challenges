//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
    return `something ${a}`;
}
const Test = require('../testHelper.js');
Test.assertEquals(giveMeSomething("a"), "something a")
Test.assertEquals(giveMeSomething("is cooking"), "something is cooking")
Test.assertEquals(giveMeSomething(" is cooking"), "something  is cooking")