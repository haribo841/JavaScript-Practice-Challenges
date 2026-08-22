//Create a function which takes an argument of humanYears and returns [humanYears, catYears, dogYears] array.
function calculateYears(humanYears) {
    if (humanYears === 1) return [1, 15, 15];
    if (humanYears === 2) return [2, 24, 24];

    const catYears = 24 + (humanYears - 2) * 4;
    const dogYears = 24 + (humanYears - 2) * 5;
    return [humanYears, catYears, dogYears];
}
import { assertEquals } from '../testHelper.js';
assertEquals(calculateYears(1), [1, 15, 15])
assertEquals(calculateYears(2), [2, 24, 24])
assertEquals(calculateYears(10), [10, 56, 64])
assertEquals(calculateYears(20), [20, 96, 114])
assertEquals(calculateYears(65), [65, 276, 339])
assertEquals(calculateYears(43), [43, 188, 229])
assertEquals(calculateYears(100), [100, 416, 514])
