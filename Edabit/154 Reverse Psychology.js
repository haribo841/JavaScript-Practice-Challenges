//For this challenge, you will NOT be given a string.
//Your task isn't to add "Do not" before the given string.
//If there is no given string, you will not return "Do not do anything."
function reversePsychology(s) {
    return s ? `Do not ${s}.` : "Do not do anything.";
}
import { assertEquals } from '../testHelper.js';
assertEquals(reversePsychology("wash the dishes"), "Do not wash the dishes.")
assertEquals(reversePsychology("eat your lunch"), "Do not eat your lunch.")
assertEquals(reversePsychology("go to school"), "Do not go to school.")
assertEquals(reversePsychology(), "Do not do anything.")
assertEquals(reversePsychology("read"), "Do not read.")
assertEquals(reversePsychology("learn Python"), "Do not learn Python.")
assertEquals(reversePsychology("exercise"), "Do not exercise.")
assertEquals(reversePsychology("buy PC parts"), "Do not buy PC parts.")
assertEquals(reversePsychology("do your homework"), "Do not do your homework.")
assertEquals(reversePsychology("drink water"), "Do not drink water.")
assertEquals(reversePsychology("look around"), "Do not look around.")