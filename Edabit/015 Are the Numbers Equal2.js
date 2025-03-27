//Create a function that takes two integers and checks if they are equal.
function isEqual(num1, num2) {
    return typeof num1 === 'number' && typeof num2 === 'number' && num1 === num2;
}

const Test = require('../testHelper.js');
Test.assertEquals(isEqual(2, 2), true)
Test.assertEquals(isEqual("1", 5), false)
Test.assertEquals(isEqual(88, 88), true)
Test.assertEquals(isEqual(36, 35), false)
Test.assertEquals(isEqual("1", 1), false)
Test.assertEquals(isEqual(1, 1), true)
Test.assertEquals(isEqual(5, 6), false)
Test.assertEquals(isEqual("1", "1"), false)