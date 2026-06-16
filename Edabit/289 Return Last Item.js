//Create a function that returns the last value of the last item in an array or string.
function lastItem(input) {
    return input.length > 0 ? input[input.length - 1] : undefined
}
import { assertEquals } from '../testHelper.js';
assertEquals(lastItem([0, 4, 19, 34, 50, -9, 2]), 2)
assertEquals(lastItem(["Hello", "There", "JavaScript", "User"]), "User")
assertEquals(lastItem([]), undefined)
assertEquals(lastItem([true, false, false, true]), true)
assertEquals(lastItem([(5, 0), (0, 5, 6, 7), (3, 5, 67, 7), (0, -9, 3, 45, 5)]), (0, -9, 3, 45, 5))
assertEquals(lastItem("JavaScript is a great programming langauge."), ".")
assertEquals(lastItem(["H", "E", "L", "L", "O"]), "O")
assertEquals(lastItem("The quick brown fox jumped over the lazy dog"), "g")
assertEquals(lastItem(""), undefined)