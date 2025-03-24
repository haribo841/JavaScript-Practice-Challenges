//Fix the code in the code tab to pass this challenge (only syntax errors).
function sumArray(arr) {
    let sum = 0; // Initialize sum to 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add each element of the array to sum
    }
    return sum; // Return the final sum
}

const Test = require('../testHelper.js');
Test.assertEquals(sumArray([1, 2, 3, 4, 5]), 15)
Test.assertEquals(sumArray([-1, 0, 1]), 0)
Test.assertEquals(sumArray([0, 4, 8, 12]), 24)