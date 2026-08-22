//Create a function that takes a number as an argument and returns negative of that number.
//Return negative numbers without any change.
function returnNegative(n) {
    if (n === 0) return 0;
    return n < 0 ? n : -n;
}
import * as Test from '../testHelper.js';
Test.assertEquals(returnNegative(4), -4)
Test.assertEquals(returnNegative(15), -15)
Test.assertEquals(returnNegative(-4), -4)
Test.assertEquals(returnNegative(42), -42)
Test.assertEquals(returnNegative(-9), -9)
Test.assertEquals(returnNegative(0), 0)
Test.assertEquals(returnNegative(1), -1)
Test.assertEquals(returnNegative(-1), -1)
