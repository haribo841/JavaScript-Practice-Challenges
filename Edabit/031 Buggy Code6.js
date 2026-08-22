//Mubashir wants to remove numbers from a given string!
//Help him by fixing the code in the code tab to pass this challenge.
function removeNumbers(str) {
    return str.split('').filter(c => Number.isNaN(Number.parseInt(c))).join('');
}
import * as Test from '../testHelper.js';
Test.assertEquals(removeNumbers("mubashir1"), "mubashir")
Test.assertEquals(removeNumbers("12ma23tt"), "matt")
Test.assertEquals(removeNumbers("e1d2a3b4i5t6"), "edabit")
Test.assertEquals(removeNumbers("pakistan007"), "pakistan")
Test.assertEquals(removeNumbers("ai4653rf53or4235ce"), "airforce")
