function hello() {
    return "hello world";
}
const Test = require('../testHelper.js');
Test.assertEquals(hello(), "hello world", "Did you *return* the result?");
console.log(hello());