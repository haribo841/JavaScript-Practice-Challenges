//Given a string, return true if its length is even or false if the length is odd.
function oddOrEven(s) {
    return s.length % 2 === 0;
}
const Test = require('../testHelper.js');
Test.assertEquals(oddOrEven("apples"), true)
Test.assertEquals(oddOrEven("banana"), true)
Test.assertEquals(oddOrEven("cherry"), true)
Test.assertEquals(oddOrEven("mango"), false)
Test.assertEquals(oddOrEven("peach"), false)
Test.assertEquals(oddOrEven("pears"), false)