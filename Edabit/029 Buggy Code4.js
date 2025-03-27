//Emmy has written a function that returns a greeting to users.
//However, she's in love with Mubashir, and would like to greet him slightly differently.
//She added a special case in her function, but she made a mistake.
function greeting(name) {
    if (name == "Mubashir") {
        return "Hello, my Love!";
    }
    else { return "Hello, " + name + "!"; }
}
const Test = require('../testHelper.js');
Test.assertEquals(greeting("Matt"), "Hello, Matt!")
Test.assertEquals(greeting("Helen"), "Hello, Helen!")
Test.assertEquals(greeting("Mubashir"), "Hello, my Love!")