//Create a function that takes an array of values and returns the first and last values in a new array.
function firstLast(arr) {
    return [arr[0], arr[arr.length - 1]];
}
import { assertEquals } from '../testHelper.js';
assertEquals(firstLast([5, 10, 15, 20, 25]), [5, 25])
assertEquals(firstLast(["edabit", 13, null, false, true]), ["edabit", true])
assertEquals(firstLast([undefined, 4, "6", "hello", null]), [undefined, null])
assertEquals(firstLast(["hello", "edabit", "dot", "com"]), ["hello", "com"])
assertEquals(firstLast([3, 2, 1]), [3, 1])
assertEquals(firstLast(["one", "two"]), ["one", "two"])
assertEquals(firstLast([false, false, true, false, false, true, false]), [false, false])