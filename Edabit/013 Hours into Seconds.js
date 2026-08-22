//Write a function that converts hours into seconds.
function howManySeconds(hours) {
    return hours * 3600;
}
import * as Test from '../testHelper.js';
Test.assertEquals(howManySeconds(2), 7200)
Test.assertEquals(howManySeconds(10), 36000)
Test.assertEquals(howManySeconds(24), 86400)
Test.assertEquals(howManySeconds(36), 129600)