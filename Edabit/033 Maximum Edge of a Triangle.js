//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}
const Test = require('../testHelper.js');
Test.assertEquals(nextEdge(5, 4), 8)
Test.assertEquals(nextEdge(8, 3), 10)
Test.assertEquals(nextEdge(7, 9), 15)
Test.assertEquals(nextEdge(10, 4), 13)
Test.assertEquals(nextEdge(7, 2), 8)