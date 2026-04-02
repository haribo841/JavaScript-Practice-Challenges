//Write a function that takes a year and returns its corresponding century.
function centuryFromYear(year) {
    return Math.ceil(year / 100);
}
import { assertEquals } from '../testHelper.js';
assertEquals(centuryFromYear(2020), 21)
assertEquals(centuryFromYear(200), 2)
assertEquals(centuryFromYear(2005), 21)
assertEquals(centuryFromYear(1700), 17)
assertEquals(centuryFromYear(1705), 18)