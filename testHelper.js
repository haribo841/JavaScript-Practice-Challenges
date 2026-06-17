const Test = {
  assertEquals: function (actual, expected, message) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Test passed.");
    } else {
      console.error("Test failed:", message);
      console.error("Expected:", expected, "but got:", actual);
    }
  },

 assertNotEquals: function (actual, notExpected, message) {
     if (actual !== notExpected) {
         console.log("Test passed.");
     } else {
         console.error("Test failed:", message);
         console.error("Did not expect the same object reference.");
     }
    }
  }
;
export const assertEquals = Test.assertEquals;
export const assertNotEquals = Test.assertNotEquals;