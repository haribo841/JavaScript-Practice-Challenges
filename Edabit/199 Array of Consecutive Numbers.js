//Implement a function that returns an array containing all the consecutive numbers in 
//ascendant order from the given value low up to the given value high(bounds included).
function getSequence(low, high) {
    return Array.from({ length: high - low + 1 }, (_, i) => low + i);
}
import { assertEquals } from '../testHelper.js';
assertEquals(getSequence(1, 5), [1, 2, 3, 4, 5], "Example #1")
assertEquals(getSequence(98, 100), [98, 99, 100], "Example #2")
assertEquals(getSequence(1000, 1000), [1000], "Example #3")
assertEquals(getSequence(1450, 1460), [1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460])
assertEquals(getSequence(0, 3), [0, 1, 2, 3])
assertEquals(getSequence(-10, 1), [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1])
assertEquals(getSequence(-100, -100), [-100])