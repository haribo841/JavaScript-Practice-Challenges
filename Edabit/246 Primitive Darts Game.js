//Convert cartesian coordinates (x, y) to polar coordinates (R, phi) and return score based on the R value.
//R > 10 gives 0 points, 10 >= R > 5 gives 1 point, 5 >= R > 1 gives 5 points, R <= 1 gives 10 points.
function dartsScoring(x, y) {
    const radius = Math.hypot(x, y);
    if (radius > 10) return 0;
    if (radius > 5) return 1;
    if (radius > 1) return 5;
    return 10;
}
import { assertEquals } from '../testHelper.js';
assertEquals(dartsScoring(-9, 9), 0)
assertEquals(dartsScoring(0, 10), 1)
assertEquals(dartsScoring(-5, 0), 5)
assertEquals(dartsScoring(0, -1), 10)
assertEquals(dartsScoring(0, 0), 10)
assertEquals(dartsScoring(-0.1, -0.1), 10)
assertEquals(dartsScoring(0.7, 0.7), 10)
assertEquals(dartsScoring(0.8, -0.8), 5)
assertEquals(dartsScoring(-3.5, 3.5), 5)
assertEquals(dartsScoring(-3.6, -3.6), 1)
assertEquals(dartsScoring(-7.0, 7.0), 1)
assertEquals(dartsScoring(7.1, -7.1), 0)
assertEquals(dartsScoring(0.5, -4), 5)
