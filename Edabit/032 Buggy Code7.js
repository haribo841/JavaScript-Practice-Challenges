//Mubashir wants to swap two given numbers!
//It is not returning the right values. Can you help him fix it?
function swap(a, b) {
	[a, b] = [b, a];
	return [a, b]
}
const Test = require('../testHelper.js');
Test.assertEquals(swap(100, 200), [200, 100])
Test.assertEquals(swap(44, 33), [33, 44])
Test.assertEquals(swap(21, 12), [12, 21])
Test.assertEquals(swap(10, 20), [20, 10])