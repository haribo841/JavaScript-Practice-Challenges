//Create a function which returns "upper" if all the letters in a word are uppercase,
//"lower" if lowercase and "mixed" for any mix of the two.
function getCase(str) {
    return str === str.toUpperCase() ? "upper" : str === str.toLowerCase() ? "lower" : "mixed"
}
import { assertEquals } from '../testHelper.js';
assertEquals(getCase("whisper..."), "lower")
assertEquals(getCase("SHOUT!"), "upper")
assertEquals(getCase("Indoor Voice"), "mixed")
assertEquals(getCase("324324Indoor66453546Voice434"), "mixed")
assertEquals(getCase("!!!!SHOUT!!!!"), "upper")
assertEquals(getCase("......313whisper2131232..."), "lower")