//Fix the code in the code tab to pass this challenge (only syntax errors).
function cubes(a) {
	return a ** 3;
}
const Test = require('../testHelper.js');
Test.assertEquals(cubes(2), 8)
Test.assertEquals(cubes(3), 27)
Test.assertEquals(cubes(4), 64)
Test.assertEquals(cubes(5), 125)
Test.assertEquals(cubes(10), 1000)