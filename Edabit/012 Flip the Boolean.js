//Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
/**
 * @param {unknown} bool Value to validate and reverse.
 * @returns {boolean | "boolean expected"} Reversed boolean or the required validation message.
 */
function reverse(bool) {
    if (typeof (bool) === "boolean") return !bool;
    return "boolean expected";
}
import * as Test from '../testHelper.js';
Test.assertEquals(reverse(false), true)
Test.assertEquals(reverse(true), false)
Test.assertEquals(reverse(0), "boolean expected")
Test.assertEquals(reverse(null), "boolean expected")
Test.assertEquals(reverse(undefined), "boolean expected")
Test.assertEquals(reverse({}), "boolean expected")
Test.assertEquals(reverse("false"), "boolean expected")
Test.assertEquals(reverse([]), "boolean expected")
Test.assertEquals(reverse(1), "boolean expected")
