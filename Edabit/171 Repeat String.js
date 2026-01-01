//Create a function that takes a string txt and a number n and returns the repeated string n number of times.
//If given argument txt is not a string, return Not A String!!
function repeatString(txt, n) {
    return typeof txt === "string" ? txt.repeat(n) : "Not A String !!";
}
import { assertEquals } from '../testHelper.js';
assertEquals(repeatString("Mubashir", 2), "MubashirMubashir")
assertEquals(repeatString("Matt", 3), "MattMattMatt")
assertEquals(repeatString(1990, 7), "Not A String !!")
assertEquals(repeatString("*", 3), "***")
assertEquals(repeatString("Hello", 11), "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello")
assertEquals(repeatString("243624", 22), "243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624")
assertEquals(repeatString([], 3), "Not A String !!")
assertEquals(repeatString({}, 3), "Not A String !!")
assertEquals(repeatString(24, 3), "Not A String !!")
assertEquals(repeatString(true, 3), "Not A String !!")
assertEquals(repeatString("Hello", 0), "")