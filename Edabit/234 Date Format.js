//Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.
function formatDate(date) {
    return date.split('/').reverse().join('');
}
import { assertEquals } from '../testHelper.js';
assertEquals(formatDate("11/12/2019"), "20191211")
assertEquals(formatDate("12/31/2019"), "20193112")
assertEquals(formatDate("01/15/2019"), "20191501")