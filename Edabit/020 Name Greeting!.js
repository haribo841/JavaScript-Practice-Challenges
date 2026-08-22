//Create a function that takes a name and returns a greeting in the form of a string.
//Don't use a normal function, use an arrow function.
const helloName = name => `Hello ${name}!`;
import * as Test from '../testHelper.js';
Test.assertEquals(helloName("Gerald"), "Hello Gerald!")
Test.assertEquals(helloName("Fatima"), "Hello Fatima!")
Test.assertEquals(helloName("Ed"), "Hello Ed!")
Test.assertEquals(helloName("Tiffany"), "Hello Tiffany!")