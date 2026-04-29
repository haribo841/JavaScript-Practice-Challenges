//Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.
function isTriangle(a, b, c) {
        return a + b > c && a + c > b && b + c > a;
}
import { assertEquals } from '../testHelper.js';
assertEquals(isTriangle(4, 5, 6), true)
assertEquals(isTriangle(3, 4, 6), true)
assertEquals(isTriangle(2, 5, 7), false)
assertEquals(isTriangle(2, 5, 9), false)
assertEquals(isTriangle(2, 9, 5), false)
assertEquals(isTriangle(9, 2, 5), false)
assertEquals(isTriangle(11, 12, 20), true)
assertEquals(isTriangle(14, 3, 12), true)
assertEquals(isTriangle(23, 4, 28), false)
assertEquals(isTriangle(21, 4, 25), false)