//Create a function that takes a string (a random name).
//If the last character of the name is an "n", return true, otherwise return false.
function isLastCharacterN(word) {
    return word.charAt(word.length - 1).toLowerCase() === 'n';
}
const Test = require('../testHelper.js');
Test.assertEquals(isLastCharacterN("Aiden"), true)
Test.assertEquals(isLastCharacterN("Roxy"), false)
Test.assertEquals(isLastCharacterN("Bert"), false)
Test.assertEquals(isLastCharacterN("Dean"), true)
Test.assertEquals(isLastCharacterN("Ian"), true)
Test.assertEquals(isLastCharacterN("Brian"), true)
Test.assertEquals(isLastCharacterN("Daniel"), false)