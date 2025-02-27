//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
    return base * height / 2;
}
const Test = require('../testHelper.js');
Test.assertEquals(triArea(3, 2), 3)
Test.assertEquals(triArea(5, 4), 10)
Test.assertEquals(triArea(10, 10), 50)
Test.assertEquals(triArea(0, 60), 0)
Test.assertEquals(triArea(12, 11), 66)
console.log(triArea());