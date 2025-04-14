//Create a function that takes a number n and returns the nth even number beginning with 0 as the first.
function nthEven(n) {
    return (n - 1) * 2;
}
const Test = require('../testHelper.js');
Test.assertEquals(nthEven(1), 0)
Test.assertEquals(nthEven(2), 2)
Test.assertEquals(nthEven(3), 4)
Test.assertEquals(nthEven(100), 198)
Test.assertEquals(nthEven(1298734), 2597466)