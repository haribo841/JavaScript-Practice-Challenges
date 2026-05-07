//Given a year you must implement a function that returns true if it's a leap year, or false if it's not.
function isLeap(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(isLeap(2020), true, "Example #1")
assertEquals(isLeap(1800), false, "Example #2")
assertEquals(isLeap(2000), true, "Example #3")
assertEquals(isLeap(2019), false, "Example #4")
assertEquals(isLeap(1452), true)
assertEquals(isLeap(1998), false)
assertEquals(isLeap(1904), true)
assertEquals(isLeap(1985), false)
assertEquals(isLeap(2048), true)
assertEquals(isLeap(1600), true)