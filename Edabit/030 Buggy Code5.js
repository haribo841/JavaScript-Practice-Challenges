//Mubashir created an infinite loop!
//Help him by fixing the code in the code tab to pass this challenge.
function printArray(number) {
    const newArray = [];

    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}
import * as Test from '../testHelper.js';
Test.assertEquals(printArray(1), [1])
Test.assertEquals(printArray(2), [1, 2])
Test.assertEquals(printArray(3), [1, 2, 3])
Test.assertEquals(printArray(4), [1, 2, 3, 4])
Test.assertEquals(printArray(5), [1, 2, 3, 4, 5])
Test.assertEquals(printArray(6), [1, 2, 3, 4, 5, 6])
Test.assertEquals(printArray(7), [1, 2, 3, 4, 5, 6, 7])
Test.assertEquals(printArray(8), [1, 2, 3, 4, 5, 6, 7, 8])
Test.assertEquals(printArray(9), [1, 2, 3, 4, 5, 6, 7, 8, 9])
Test.assertEquals(printArray(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
