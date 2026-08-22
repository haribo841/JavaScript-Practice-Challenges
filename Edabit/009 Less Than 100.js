//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
    return a+b < 100;
}
import * as Test from '../testHelper.js';
Test.assertEquals(lessThan100(5, 57), true)
Test.assertEquals(lessThan100(77, 30), false)
Test.assertEquals(lessThan100(0, 59), true)
Test.assertEquals(lessThan100(78, 35), false)
Test.assertEquals(lessThan100(63, 11), true)
Test.assertEquals(lessThan100(37, 99), false)
Test.assertEquals(lessThan100(52, 11), true)
Test.assertEquals(lessThan100(82, 95), false)
Test.assertEquals(lessThan100(17, 44), true)
Test.assertEquals(lessThan100(74, 53), false)
Test.assertEquals(lessThan100(3, 77), true)
Test.assertEquals(lessThan100(25, 80), false)
Test.assertEquals(lessThan100(59, 28), true)
Test.assertEquals(lessThan100(69, 87), false)
Test.assertEquals(lessThan100(10, 45), true)
Test.assertEquals(lessThan100(43, 58), false)
Test.assertEquals(lessThan100(50, 44), true)
Test.assertEquals(lessThan100(74, 89), false)
Test.assertEquals(lessThan100(3, 27), true)
Test.assertEquals(lessThan100(21, 79), false)