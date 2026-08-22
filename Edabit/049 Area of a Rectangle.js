//Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
function area(h, w) {
    return (h > 0 && w > 0) ? h * w : -1;
}
import * as Test from '../testHelper.js';
Test.assertEquals(area(5, 3), 15)
Test.assertEquals(area(8, 5), 40)
Test.assertEquals(area(5, 4), 20)
Test.assertEquals(area(2, 3), 6)
Test.assertEquals(area(10000, 10000), 100000000)
Test.assertEquals(area(-2, -5), -1)
Test.assertEquals(area(0, 3), -1)
Test.assertEquals(area(5, -3), -1)
Test.assertEquals(area(0, 1), -1)
Test.assertEquals(area(-1, 0), -1)