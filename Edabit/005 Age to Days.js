//Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
    return age * 365;
}
const Test = require('../testHelper.js');
Test.assertEquals(calcAge(10), 3650)
Test.assertEquals(calcAge(0), 0)
Test.assertEquals(calcAge(73), 26645)