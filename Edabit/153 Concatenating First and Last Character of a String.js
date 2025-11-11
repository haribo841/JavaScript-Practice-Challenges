//Create a function that takes a string and returns the concatenated first and last character.
function firstLast(name) {
    return name.charAt(0) + name.charAt(name.length - 1);
}
import { assertEquals } from '../testHelper.js';
assertEquals(firstLast("ganesh"), "gh")
assertEquals(firstLast("kali"), "ki")
assertEquals(firstLast("shiva"), "sa")
assertEquals(firstLast("vishnu"), "vu")
assertEquals(firstLast("durga"), "da")
assertEquals(firstLast("brahma"), "ba")