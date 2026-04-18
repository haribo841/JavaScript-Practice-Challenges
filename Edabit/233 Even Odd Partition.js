//Write a function that partitions the array into two subarrays:
//one with all even integers, and the other with all odd integers.
//Return your result in the following format: [[evens], [odds]]
function evenOddPartition(arr) {
    return arr.reduce((acc, val) => {
        if (val % 2 === 0) {
            acc[0].push(val);
        } else {
            acc[1].push(val);
        }
        return acc;
    }, [[], []]);
}
import { assertEquals } from '../testHelper.js';
assertEquals(evenOddPartition([5, 8, 9, 2, 0]), [[8, 2, 0], [5, 9]])
assertEquals(evenOddPartition([1, 0, 1, 0, 1, 0]), [[0, 0, 0], [1, 1, 1]])
assertEquals(evenOddPartition([8, 8, 4, 2]), [[8, 8, 4, 2], []])
assertEquals(evenOddPartition([1, 3, 5, 7, 9]), [[], [1, 3, 5, 7, 9]])
assertEquals(evenOddPartition([]), [[], []])