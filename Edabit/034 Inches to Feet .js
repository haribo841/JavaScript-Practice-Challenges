//Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
function inchesToFeet(inches) {
    return Math.floor(inches / 12);
}
const Test = require('../testHelper.js');
Test.assertEquals(inchesToFeet(12), 1)
Test.assertEquals(inchesToFeet(360), 30)
Test.assertEquals(inchesToFeet(3612), 301)
Test.assertEquals(inchesToFeet(324), 27)
Test.assertEquals(inchesToFeet(3012), 251)
Test.assertEquals(inchesToFeet(11), 0)