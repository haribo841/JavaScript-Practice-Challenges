//Given two integers, a and b, return true if a can be divided evenly by b.
//Return false otherwise.
function dividesEvenly(a, b) {
    return a % b === 0;
}
const Test = require('../testHelper.js');
Test.assertEquals(dividesEvenly(98, 7), true)
Test.assertEquals(dividesEvenly(87, 49), false)
Test.assertEquals(dividesEvenly(34, 14), false)
Test.assertEquals(dividesEvenly(78, 6), true)
Test.assertEquals(dividesEvenly(30, 4), false)
Test.assertEquals(dividesEvenly(87, 73), false)
Test.assertEquals(dividesEvenly(74, 7), false)
Test.assertEquals(dividesEvenly(87, 29), true)
Test.assertEquals(dividesEvenly(48, 24), true)
Test.assertEquals(dividesEvenly(99, 20), false)
Test.assertEquals(dividesEvenly(98, 49), true)
Test.assertEquals(dividesEvenly(100, 6), false)
Test.assertEquals(dividesEvenly(64, 4), true)
Test.assertEquals(dividesEvenly(70, 35), true)
Test.assertEquals(dividesEvenly(38, 38), true)
Test.assertEquals(dividesEvenly(29, 3), false)
Test.assertEquals(dividesEvenly(20, 8), false)
Test.assertEquals(dividesEvenly(66, 50), false)
Test.assertEquals(dividesEvenly(95, 1), true)
Test.assertEquals(dividesEvenly(58, 2), true)