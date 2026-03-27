//Create a function that counts how many D's are in a sentence.
function countDs(sentence) {
    return sentence.split('').filter(char => char.toLowerCase() === 'd').length;
}
import { assertEquals } from '../testHelper.js';
assertEquals(countDs("My friend Dylan got distracted at school"), 4)
assertEquals(countDs("Debris was scattered all over the place."), 2)
assertEquals(countDs("The rodents hibernated in their den."), 3)