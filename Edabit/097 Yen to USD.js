//Create a function that can turn JPY (Japanese yen) to USD (American dollar).
function yenToUsd(yen) {
    return yen / 107.5
}
import { assertEquals } from '../testHelper.js';
assertEquals(yenToUsd(1), 0.01)
assertEquals(yenToUsd(500), 4.65)
assertEquals(yenToUsd(649), 6.04)
assertEquals(yenToUsd(1000), 9.3)