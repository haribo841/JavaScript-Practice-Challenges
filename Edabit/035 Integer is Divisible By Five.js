//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(n) {
    return n % 5 === 0;
}
import * as Test from '../testHelper.js';
Test.assertEquals(divisibleByFive(7), false)
Test.assertEquals(divisibleByFive(5), true)
Test.assertEquals(divisibleByFive(15), true)
Test.assertEquals(divisibleByFive(33), false)
Test.assertEquals(divisibleByFive(-18), false)
Test.assertEquals(divisibleByFive(999), false)
Test.assertEquals(divisibleByFive(2), false)