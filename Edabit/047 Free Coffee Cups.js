//Create a function that takes a number n and returns the nth even number beginning with 0 as the first.
function totalCups(n) {
    return n + Math.floor(n/6);
}
import * as Test from '../testHelper.js';
Test.assertEquals(totalCups(6), 7)
Test.assertEquals(totalCups(3), 3)
Test.assertEquals(totalCups(7), 8)
Test.assertEquals(totalCups(12), 14)
Test.assertEquals(totalCups(213), 248)
Test.assertEquals(totalCups(16), 18)