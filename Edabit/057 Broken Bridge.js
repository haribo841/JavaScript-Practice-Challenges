//Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).
function isSafeBridge(str) {
    return !str.includes(" ");
}
import * as Test from '../testHelper.js';
Test.assertEquals(isSafeBridge("####"), true)
Test.assertEquals(isSafeBridge("## ####"), false)
Test.assertEquals(isSafeBridge("#"), true)
Test.assertEquals(isSafeBridge("# #"), false)
