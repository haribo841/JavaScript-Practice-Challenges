//Create a function that takes two arguments (item, times).
//The first argument(item) is the item that needs repeating while
//the second argument(times) is the number of times the item is to be repeated.
//Return the result in an array.
function repeat(item, times) {
    return Array(times).fill(item);
}
import { assertEquals } from '../testHelper.js';
assertEquals(repeat("edabit", 3), ["edabit", "edabit", "edabit"]);
assertEquals(repeat(13, 5), [13, 13, 13, 13, 13]);
assertEquals(repeat("7", 2), ["7", "7"]);
assertEquals(repeat("2 0 1 8", 1), ["2 0 1 8"]);
assertEquals(repeat("tom dick and harry", 6), ["tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry"]);
assertEquals(repeat(0, 1), [0]);
assertEquals(repeat(0, 0), []);
assertEquals(repeat("z", 0), []);