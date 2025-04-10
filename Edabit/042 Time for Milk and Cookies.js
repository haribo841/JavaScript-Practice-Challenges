//Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise.
//Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}
const Test = require('../testHelper.js');
Test.assertEquals(timeForMilkAndCookies(new Date(2013, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(3000, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(2154, 11, 11)), false)
Test.assertEquals(timeForMilkAndCookies(new Date(2010, 11, 2)), false)
Test.assertEquals(timeForMilkAndCookies(new Date(1980, 9, 24)), false)