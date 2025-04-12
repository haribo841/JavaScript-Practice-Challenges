//Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.
function stackBoxes(n) {
    return n * n;
}
const Test = require('../testHelper.js');
Test.assertEquals(stackBoxes(1), 1)
Test.assertEquals(stackBoxes(2), 4)
Test.assertEquals(stackBoxes(0), 0)
Test.assertEquals(stackBoxes(5), 25)
Test.assertEquals(stackBoxes(27), 729)
Test.assertEquals(stackBoxes(196), 38416)
Test.assertEquals(stackBoxes(512), 262144)