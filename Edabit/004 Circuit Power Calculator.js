//Create a function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current) {
    return voltage * current;
}
import * as Test from '../testHelper.js';
Test.assertEquals(circuitPower(110, 3), 330)
Test.assertEquals(circuitPower(230, 10), 2300)
Test.assertEquals(circuitPower(480, 20), 9600)