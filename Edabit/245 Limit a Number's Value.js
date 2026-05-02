//Create a function that takes three number arguments
//one number as an input and two additional numbers representing the endpoints of a closed range
//and return the number limited to this range.
//If the number falls within the range, the number should be returned.
//If the number is less than the lower limit of the range, the lower limit should be returned.
//If the number is greater than the upper limit of the range, the upper limit should be returned.
function limitNumber(num, rangeLow, rangeHigh) {
    return num < rangeLow ? rangeLow : num > rangeHigh ? rangeHigh : num;
}
import { assertEquals } from '../testHelper.js';
assertEquals(limitNumber(5, 1, 10), 5)
assertEquals(limitNumber(-3, 1, 10), 1)
assertEquals(limitNumber(14, 1, 10), 10)
assertEquals(limitNumber(4.6, 1, 10), 4.6)
assertEquals(limitNumber(-100, -73, -70), -73)
assertEquals(limitNumber(2, -73, -70), -70)
assertEquals(limitNumber(-71.5, -73, -70), -71.5)
assertEquals(limitNumber(7, 8, 8.1), 8)
assertEquals(limitNumber(9, 8, 8.1), 8.1)
assertEquals(limitNumber(8.05, 8, 8.1), 8.05)
assertEquals(limitNumber(16, 16, 16), 16)
assertEquals(limitNumber(-1, 16, 16), 16)
assertEquals(limitNumber(800, 16, 16), 16)