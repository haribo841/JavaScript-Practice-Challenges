//Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them.
//Drinks that contain sugar(in this challenge) are:
//cola
//fanta
function skipTooMuchSugarDrinks(drinks) {
    return drinks.filter(drink => drink !== "cola" && drink !== "fanta");
}
import { assertEquals } from '../testHelper.js';
assertEquals(skipTooMuchSugarDrinks(["cola", "fanta"]), [])
assertEquals(skipTooMuchSugarDrinks(["cola", "fanta", "water"]), ["water"], "")
assertEquals(skipTooMuchSugarDrinks(["cola"]), [], "")
assertEquals(skipTooMuchSugarDrinks([]), [], "")
assertEquals(skipTooMuchSugarDrinks(["lemonade", "beer", "fanta"]), ["lemonade", "beer"], "")
assertEquals(skipTooMuchSugarDrinks(["water", "cola"]), ["water"], "")
assertEquals(skipTooMuchSugarDrinks(["water", "tea"]), ["water", "tea"], "")