const Test = {
    assertEquals: function (actual, expected, message) {
        if (JSON.stringify(actual) === JSON.stringify(expected)) {
            console.log("Test passed.");
        } else {
            console.error("Test failed:", message);
            console.error("Expected:", expected, "but got:", actual);
        }
    },
};

module.exports = Test;
