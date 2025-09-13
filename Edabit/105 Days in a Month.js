//Create a function that takes the month and year (as integers) and returns the number of days in that month.
function days(month, year) {
    return new Date(year, month, 0).getDate();
}
import { assertEquals } from '../testHelper.js';
assertEquals(days(1, 2018), 31, 'Should show the correct day amount for January');
assertEquals(days(2, 2018), 28, 'Should show the correct day amount for February on a non-leap year');
assertEquals(days(3, 2018), 31, 'Should show the correct day amount for March');
assertEquals(days(4, 2018), 30, 'Should show the correct day amount for April');
assertEquals(days(5, 2018), 31, 'Should show the correct day amount for May');
assertEquals(days(6, 2018), 30, 'Should show the correct day amount for June');
assertEquals(days(7, 2018), 31, 'Should show the correct day amount for July');
assertEquals(days(8, 2018), 31, 'Should show the correct day amount for August');
assertEquals(days(9, 2018), 30, 'Should show the correct day amount for September');
assertEquals(days(10, 2018), 31, 'Should show the correct day amount for October');
assertEquals(days(11, 2018), 30, 'Should show the correct day amount for November');
assertEquals(days(12, 2018), 31, 'Should show the correct day amount for December');
assertEquals(days(2, 2004), 29, 'Should show the correct day amount for February on a leap year that is divisible by 4 but not 100');
assertEquals(days(2, 1800), 28, 'Should show the correct day amount for February on a leap year that is divisible by 100 but not 400 ');
assertEquals(days(2, 1600), 29, 'Should show the correct day amount for February on a leap year that is divisible by 100 and 400');