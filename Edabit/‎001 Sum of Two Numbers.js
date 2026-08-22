//Create a function that takes two numbers as arguments and returns their sum.
function addition(a, b) {
    return a + b;
}
import * as Test from '../testHelper.js';
Test.assertEquals(addition(2, 3), 5)
Test.assertEquals(addition(-3, -6), -9)
Test.assertEquals(addition(7, 3), 10)
Test.assertEquals(addition(88, 2), 90)