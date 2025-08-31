//Create a function that flips M's to W's (all uppercase).
function wumbo(words) {
    return words.replace(/M/g, "W");
}
import { assertEquals } from '../testHelper.js';
assertEquals(wumbo("WHAT DO YOU MEAN WE'RE OUT OF MONEY"), "WHAT DO YOU WEAN WE'RE OUT OF WONEY", "You do not Wumbo.")
assertEquals(wumbo("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "ABCDEFGHIJKLWNOPQRSTUVWXYZ", "You do not Wumbo.")
assertEquals(wumbo("1 WUMBO 2 WUMBO 3 WUMBO 4"), "1 WUWBO 2 WUWBO 3 WUWBO 4", "You do not Wumbo.")