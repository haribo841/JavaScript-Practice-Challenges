//A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.
function additiveInverse(arr) {
    return arr.map(x => -x);
}
import { assertEquals } from '../testHelper.js';
assertEquals(additiveInverse([5, -7, 8, 3]), [-5, 7, -8, -3])
assertEquals(additiveInverse([1, 1, 1, 1, 1]), [-1, -1, -1, -1, -1])
assertEquals(additiveInverse([-5, -25, 35]), [5, 25, -35])