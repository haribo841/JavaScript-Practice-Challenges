//Given an array of numbers, negate all elements contained within.
//Negating a positive value - +n will return -n, because all + 's are removed.
//Negating a negative value--n will return n, because the first - turns the second minus into a +.
function negate(arr) {
    return arr.map(num => -num);
}
import { assertEquals } from '../testHelper.js';
assertEquals(negate([1, 2, 3, 4]), [-1, -2, -3, -4])
assertEquals(negate([-1, -2, -3, -4]), [1, 2, 3, 4])
assertEquals(negate([]), [])