//Given the radius of a circle and the area of a square,
//return true if the circumference of the circle is greater than the square's perimeter and
//false if the square's perimeter is greater than the circumference of the circle.
function circle_or_square(rad, area) {
    return (2 * Math.PI * rad) > (4 * Math.sqrt(area));
}
import { assertEquals } from '../testHelper.js';
assertEquals(circle_or_square(16, 625), true)
assertEquals(circle_or_square(8, 144), true)
assertEquals(circle_or_square(15, 400), true)
assertEquals(circle_or_square(5, 100), false)
assertEquals(circle_or_square(18, 900), false)
assertEquals(circle_or_square(1, 4), false)