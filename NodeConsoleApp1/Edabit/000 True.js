function hello() {
    return "hello world";
}
// Dummy Test object for local testing:
const Test = {
    assertEquals: function (actual, expected, message) {
        if (actual === expected) {
            console.log("Test passed.");
        } else {
            console.error("Test failed:", message);
            console.error("Expected:", expected, "but got:", actual);
        }
    }
};
Test.assertEquals(hello(), "hello world", "Did you *return* the result?");
console.log(hello());