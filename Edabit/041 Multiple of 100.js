//Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
function divisible(num) {
    return num % 100 === 0;
}
import * as Test from '../testHelper.js';
Test.assertEquals(divisible(1), false)
Test.assertEquals(divisible(100), true)
Test.assertEquals(divisible(1000), true)
Test.assertEquals(divisible(111000), true)
Test.assertEquals(divisible(-1), false, "Don't forget negatives.")
Test.assertEquals(divisible(0), true, "Cover the 0 cases.")
Test.assertEquals(divisible(-100), true, "-100 is divisible by 100.")