//Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
    return minutes * 60;
}
const Test = require('../testHelper.js');
Test.assertEquals(convert(6), 360)
Test.assertEquals(convert(4), 240)
Test.assertEquals(convert(8), 480)
Test.assertEquals(convert(60), 3600)
console.log(convert());