//Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.
function height(side) {
    return (side * Math.sqrt(3) / 2 * 10).toFixed(1) + " mm"
}
import { assertEquals } from '../testHelper.js';
assertEquals(height(2), "17.3 mm")
assertEquals(height(5), "43.3 mm")
assertEquals(height(6.2), "53.7 mm")
assertEquals(height(8.7), "75.3 mm")
assertEquals(height(10), "86.6 mm")
assertEquals(height(13), "112.6 mm")
assertEquals(height(18.5), "160.2 mm")