//Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
function flip(y) {
    return 1 - y;
}
import { assertEquals } from '../testHelper.js';
assertEquals(flip(0), 1)
assertEquals(flip(1), 0)