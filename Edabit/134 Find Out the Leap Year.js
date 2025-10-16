//Write a function that determines if the year is a leap year or not.
function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(leapYear(2004), true)
assertEquals(leapYear(8), true)
assertEquals(leapYear(4), true)
assertEquals(leapYear(2019), false)
assertEquals(leapYear(1970), false)
assertEquals(leapYear(2021), false)
assertEquals(leapYear(1934), false)
assertEquals(leapYear(1874), false)
assertEquals(leapYear(1968), true)