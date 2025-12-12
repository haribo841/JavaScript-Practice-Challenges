//Create a function which returns the length of a string, WITHOUT using String.length property.
function length(s) {
    return s.split("").reduce((acc) => acc + 1, 0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(length("Hello World"), 11)
assertEquals(length("Edabit"), 6)
assertEquals(length("wash your hands!"), 16)
assertEquals(length("34445"), 5)
assertEquals(length("   "), 3)
assertEquals(length(""), 0)
assertEquals(length("%%$"), 3)