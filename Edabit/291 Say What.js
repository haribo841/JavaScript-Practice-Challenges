//Given an object, return a string that concatenates all the values and adds the 2nd key at the end.
//Make sure you keep an empty space between them but not at the beginning or end of the string.
function sayWhat(obj) {
    return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`;
}
import { assertEquals } from '../testHelper.js';
const sampleNumber = 42;
const obj = { 1: "Mommy", 2: "please", 3: "help" }
const obj2 = { 1: sampleNumber, 2: "innocent", 3: "is" }
assertEquals(sayWhat(obj), "Mommy please help please")
assertEquals(sayWhat(obj2), `${obj2[1]} innocent is innocent`)
