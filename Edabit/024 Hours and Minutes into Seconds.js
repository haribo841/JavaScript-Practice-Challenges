//Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
function convert(hours, minutes) {
    return hours * 3600 + minutes * 60;
}
import * as Test from '../testHelper.js';
Test.assertEquals(convert(1, 0), 3600)
Test.assertEquals(convert(1, 3), 3780)
Test.assertEquals(convert(0, 30), 1800)