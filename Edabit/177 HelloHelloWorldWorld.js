//Write a function that takes an integer and:
//If the number is a multiple of 3, return "Hello".
//If the number is a multiple of 5, return "World".
//If the number is a multiple of both 3 and 5, return "Hello World".
function helloWorld(num) {
    if (num % 15 === 0) return "Hello World";
    if (num % 3 === 0) return "Hello";
    if (num % 5 === 0) return "World";
    return "";
}
import { assertEquals } from '../testHelper.js';
assertEquals(helloWorld(3), "Hello")
assertEquals(helloWorld(5), "World")
assertEquals(helloWorld(15), "Hello World")
