/*There is a single operator in C#, capable of providing the remainder of a division operation.
Two numbers are passed as parameters. The first parameter divided by the second parameter will
have a remainder, possibly zero. Return that value.*/
function remainder(x, y) {
    return x % y;
}
import * as Test from '../testHelper.js';
Test.assertEquals(remainder(7, 2), 1)
Test.assertEquals(remainder(3, 4), 3)
Test.assertEquals(remainder(-9, 45), -9)
Test.assertEquals(remainder(5, 5), 0)