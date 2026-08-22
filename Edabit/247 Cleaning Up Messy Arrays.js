//Create a function that takes an array.
//This array will contain numbers represented as strings.
//Your function should split this array into two new arrays.
//The first array should contain only even numbers.
//The second only odd.Then, wrap these two arrays in one main array and return it.
//Return an empty array if there are no even numbers, or odd.
function cleanUpArray(arr) {
    return arr.reduce((acc, val) => {
        const num = Number.parseInt(val);
        if (num % 2 === 0) {
            acc[0].push(num);
        } else {
            acc[1].push(num);
        }
        return acc;
    }, [[], []]);
}
import { assertEquals } from '../testHelper.js';
assertEquals(cleanUpArray(['9', '4', '5', '8']), [[4, 8], [9, 5]])
assertEquals(cleanUpArray(['1', '4', '5', '4', '5', '8', '9']), [[4, 4, 8], [1, 5, 5, 9]])
assertEquals(cleanUpArray(['38', '80', '13', '73', '66', '70', '83', '6', '93', '9', '7', '8', '41']), [[38, 80, 66, 70, 6, 8], [13, 73, 83, 93, 9, 7, 41]])
assertEquals(cleanUpArray(['3', '8', '0', '15', '2']), [[8, 0, 2], [3, 15]])
assertEquals(cleanUpArray(['5', '1', '7', '4', '8', '8']), [[4, 8, 8], [5, 1, 7]])
assertEquals(cleanUpArray(['8']), [[8], []])
assertEquals(cleanUpArray(['2', '64', '16', '4', '72']), [[2, 64, 16, 4, 72], []])
assertEquals(cleanUpArray(['7', '4', '8']), [[4, 8], [7]])
assertEquals(cleanUpArray(['13', '16', '8', '22', '4', '29', '6', '20', '25']), [[16, 8, 22, 4, 6, 20], [13, 29, 25]])
assertEquals(cleanUpArray(['9', '3', '7', '4']), [[4], [9, 3, 7]])
assertEquals(cleanUpArray(['15', '23', '14', '1', '27', '28', '30', '9']), [[14, 28, 30], [15, 23, 1, 27, 9]])
assertEquals(cleanUpArray(['9', '3', '8']), [[8], [9, 3]])
assertEquals(cleanUpArray(['3', '26', '18', '17', '6', '8', '30']), [[26, 18, 6, 8, 30], [3, 17]])
assertEquals(cleanUpArray(['9', '5', '1', '3', '3', '8', '3', '6', '9']), [[8, 6], [9, 5, 1, 3, 3, 3, 9]])
assertEquals(cleanUpArray(['2', '11', '23', '22', '20', '9', '5', '7', '27']), [[2, 22, 20], [11, 23, 9, 5, 7, 27]])
assertEquals(cleanUpArray(['2', '1', '7', '4', '9', '6', '11']), [[2, 4, 6], [1, 7, 9, 11]])
assertEquals(cleanUpArray(['9', '4', '13', '1', '6', '5', '0', '3']), [[4, 6, 0], [9, 13, 1, 5, 3]])
assertEquals(cleanUpArray(['11']), [[], [11]])
assertEquals(cleanUpArray(['3', '7', '21', '33', '5']), [[], [3, 7, 21, 33, 5]])
