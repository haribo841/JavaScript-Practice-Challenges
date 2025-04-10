//Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.
function howManyStickers(n) {
    return 6 * n * n;
}
const Test = require('../testHelper.js');
Test.assertEquals(howManyStickers(1), 6)
Test.assertEquals(howManyStickers(2), 24)
Test.assertEquals(howManyStickers(3), 54)
Test.assertEquals(howManyStickers(4), 96)
Test.assertEquals(howManyStickers(5), 150)
Test.assertEquals(howManyStickers(6), 216)
Test.assertEquals(howManyStickers(7), 294)
Test.assertEquals(howManyStickers(8), 384)
Test.assertEquals(howManyStickers(9), 486)
Test.assertEquals(howManyStickers(10), 600)
Test.assertEquals(howManyStickers(11), 726)
Test.assertEquals(howManyStickers(12), 864)
Test.assertEquals(howManyStickers(13), 1014)
Test.assertEquals(howManyStickers(14), 1176)
Test.assertEquals(howManyStickers(15), 1350)