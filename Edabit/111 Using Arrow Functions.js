//Create a function that returns the given argument, but by using an arrow function.
//An arrow function is constructed like so:
//arrowFunc = (/*parameters*/) =>//code here
const arrowFunc = (x) => x
import { assertEquals } from '../testHelper.js';
if (!(String(arrowFunc).includes('=>'))) {
    assertEquals(0, 1, "Your code does not use an arrow function")
}
assertEquals(arrowFunc(3), 3)
assertEquals(arrowFunc("3"), "3")
assertEquals(arrowFunc(true), true)
assertEquals(arrowFunc("test"), "test")
