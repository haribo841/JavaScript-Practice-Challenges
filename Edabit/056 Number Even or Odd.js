//Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
}
const Test = require('../testHelper.js');
Test.assertEquals(isEvenOrOdd(3), "odd")
Test.assertEquals(isEvenOrOdd(0), "even")
Test.assertEquals(isEvenOrOdd(7), "odd")
Test.assertEquals(isEvenOrOdd(12), "even")
Test.assertEquals(isEvenOrOdd(6474), "even")
Test.assertEquals(isEvenOrOdd(563), "odd")
Test.assertEquals(isEvenOrOdd(3), "odd")
Test.assertEquals(isEvenOrOdd(1111100000), "even")
Test.assertEquals(isEvenOrOdd(301), "odd")
Test.assertEquals(isEvenOrOdd(-3), "odd")
Test.assertEquals(isEvenOrOdd(-0), "even")
Test.assertEquals(isEvenOrOdd(-7), "odd")
Test.assertEquals(isEvenOrOdd(-12), "even")
Test.assertEquals(isEvenOrOdd(-6474), "even")
Test.assertEquals(isEvenOrOdd(-563), "odd")
Test.assertEquals(isEvenOrOdd(-3), "odd")
Test.assertEquals(isEvenOrOdd(-1111100000), "even")
Test.assertEquals(isEvenOrOdd(-301), "odd")