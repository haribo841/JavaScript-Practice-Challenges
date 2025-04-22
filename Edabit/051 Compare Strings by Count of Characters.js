//Create a function that takes two strings as arguments and return either true or false depending on whether the
//total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
    return str1.length === str2.length;
}
const Test = require('../testHelper.js');
Test.assertEquals(comp("AB", "CD"), true)
Test.assertEquals(comp("ABC", "DE"), false)
Test.assertEquals(comp("hello", "edabit"), false)
Test.assertEquals(comp("meow", "woof"), true)
Test.assertEquals(comp("jrnvjrnnt", "cvjknfjvmfvnfjn"), false)
Test.assertEquals(comp("jkvnjrt", "krnf"), false)
Test.assertEquals(comp("Facebook", "Snapchat"), true)