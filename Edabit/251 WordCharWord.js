//Create a function that will put the first argument, a character, between every word in the second argument, a string.
function add(char, str) {
        return str.split(" ").join(char);
}
import { assertEquals } from '../testHelper.js';
assertEquals(add("#", "hello world"), "hello#world")
assertEquals(add("R", "javascript is fun"), "javascriptRisRfun")
assertEquals(add("*", "use .join() for this challenge"), "use*.join()*for*this*challenge")
assertEquals(add("#", " "), "#")