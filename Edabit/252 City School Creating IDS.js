//Create a function that will return a four-character ID using the person's first name and last name.
//The first character will be the first letter of the first name but in lowercase.
//The next three characters will be the first three characters of the last name,
//but the first letter will be capitalized and the other two will be in lower case.
function createID(firstname, lastname) {
    return firstname[0].toLowerCase() + lastname[0].toUpperCase() + lastname.slice(1, 3).toLowerCase();
}
import { assertEquals } from '../testHelper.js';
assertEquals(createID("mary", "smith"), "mSmi", "all lower case")
assertEquals(createID("S", "WORKING"), "sWor", "all upper case")
assertEquals(createID("joHN", "wAShington"), "jWas", "mixed case")