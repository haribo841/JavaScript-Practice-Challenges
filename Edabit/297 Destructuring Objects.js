//In JavaScript, you can do basic object assignment like this:
//const obj = { one: 1, two: 2 }
//let one = obj.one
//let two = obj.two
//However, with ES6 you can assign the variables in a much more succinct way.Use ES6 object destructuring to assign variables one and two to obj.one and obj.two respectively.
//Although you can use let, var, or const for assignment, DO NOT use these in this challenge.
//let str = `( /* create assignments here */ = { one : 1, two : 2}).toString()`
const str = `( { one, two } = { one : 1, two : 2}).toString()`
import { assertEquals } from '../testHelper.js';
globalThis.one = undefined;
globalThis.two = undefined;
eval(str)

const validString = (str) => {
    return /\{\s*one\s*,\s*two\s*\}\s*=/.test(str) ? "valid" : "not valid"
}

assertEquals(validString(str), "valid", "You must use the object destructuring to assign variables one and two")
assertEquals(globalThis.one, 1, "The variable one must equal 1")
assertEquals(globalThis.two, 2, "The variable two must equal 2")
