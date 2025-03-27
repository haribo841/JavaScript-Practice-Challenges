//Create a function that takes length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
    return length * 2 + width * 2;
}
const Test = require('../testHelper.js');
Test.assertEquals(findPerimeter(6, 7), 26)
Test.assertEquals(findPerimeter(20, 10), 60)
Test.assertEquals(findPerimeter(2, 9), 22)