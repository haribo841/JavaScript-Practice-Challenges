const Test = {
    assertEquals: function (actual, expected, message) {
        if (actual === expected) {
            console.log("Test passed.");
        } else {
            console.error("Test failed:", message);
            console.error("Expected:", expected, "but got:", actual);
        }
    },
};

module.exports = Test;