/*Create a function that takes a positive integer n and returns the nth "star number".
A star number is a centered figurate number that represents a centered hexagram (six-pointed star),
such as the one that Chinese checkers is played on.*/
function starNumber(n) {
    return 6 * n * (n - 1) + 1;
}
import { assertEquals } from '../testHelper.js';
assertEquals(starNumber(2), 13)
assertEquals(starNumber(3), 37)
assertEquals(starNumber(6), 181)
assertEquals(starNumber(6), 181)
assertEquals(starNumber(8), 337)
assertEquals(starNumber(6), 181)
assertEquals(starNumber(11), 661)