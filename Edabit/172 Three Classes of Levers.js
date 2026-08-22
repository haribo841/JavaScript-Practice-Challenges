/*Levers are simple machines with a rigid beam and a fulcrum.
There are 3-types of levers: first class, second class and third class.
In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.
Given an array that contains the fulcrum "f", the effort "e", and the load "l",
write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.*/
function determineLever(arr) {
    const fulcrumIndex = arr.indexOf("f");
    if (fulcrumIndex === 1) return "first class lever";
    if (fulcrumIndex === 2) return "second class lever";
    return "third class lever";
}
import { assertEquals } from '../testHelper.js';
assertEquals(determineLever(["e", "f", "l"]), "first class lever")
assertEquals(determineLever(["e", "l", "f"]), "second class lever")
assertEquals(determineLever(["f", "e", "l"]), "third class lever")
