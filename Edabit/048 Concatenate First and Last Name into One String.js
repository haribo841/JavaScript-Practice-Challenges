//Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
    return `${lastName}, ${firstName}`; // Template literal syntax
}
const Test = require('../testHelper.js');
Test.assertEquals(concatName("John", "Doe"), "Doe, John")
Test.assertEquals(concatName("First", "Last"), "Last, First")
Test.assertEquals(concatName("A", "B"), "B, A")

// In case someone is making odd assumptions about comma characters.
Test.assertEquals(concatName(",", ","), ",, ,")