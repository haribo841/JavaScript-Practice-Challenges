//Return the first n elements of the sequence with the given common difference diff.
//The final result should be a string of numbers, separated by comma and space.
function arithmeticProgression(start, diff, n) {
    return Array.from({ length: n }, (_, i) => start + diff * i).join(", ")
}
import { assertEquals } from '../testHelper.js';
assertEquals(arithmeticProgression(1, 2, 5), "1, 3, 5, 7, 9")
assertEquals(arithmeticProgression(1, 0, 5), "1, 1, 1, 1, 1")
assertEquals(arithmeticProgression(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26")
assertEquals(arithmeticProgression(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10")