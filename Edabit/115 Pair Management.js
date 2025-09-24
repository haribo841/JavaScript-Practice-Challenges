//Given two arguments, return an array which contains these two arguments.
function makePair(num1, num2) {
    return [num1, num2];
}
import { assertEquals } from '../testHelper.js';
assertEquals(makePair(1, 2), [1, 2])
assertEquals(makePair(21, 82), [21, 82])
assertEquals(makePair(4213, 526), [4213, 526])