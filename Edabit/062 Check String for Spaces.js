//Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
    return str.includes(" ");
}
import * as Test from '../testHelper.js';
Test.assertEquals(hasSpaces("Foo"), false)
Test.assertEquals(hasSpaces("Foo bar"), true)
Test.assertEquals(hasSpaces("Foo "), true)
Test.assertEquals(hasSpaces(" Foo"), true)
Test.assertEquals(hasSpaces(" "), true)
Test.assertEquals(hasSpaces(""), false)
Test.assertEquals(hasSpaces(",./;'[]-="), false)