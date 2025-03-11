//Consider a && b:
//a is checked if it is true or false.
//If a is false, false is returned.
//b is checked if it is true or false.
//If b is false, false is returned.
//Otherwise, true is returned (as both a and b are therefore true ).
//Rembember that the default value for bool is false. (eg. var c = new bool(); c is false.)
//The && operator will only return true for true && true.
//Make a function using the && operator.
function and(a, b) {
    return a && b;
}
const Test = require('../testHelper.js');
Test.assertEquals(and(true, true), true)
Test.assertEquals(and(true, false), false)
Test.assertEquals(and(false, true), false)
Test.assertEquals(and(false, false), false)
console.log(and());