//Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).
function isSafeBridge(str) {
    return str.indexOf(" ") === -1;
}
const Test = require('../testHelper.js');
Test.assertEquals(isSafeBridge("####"), true)
Test.assertEquals(isSafeBridge("## ####"), false)
Test.assertEquals(isSafeBridge("#"), true)
Test.assertEquals(isSafeBridge("# #"), false)