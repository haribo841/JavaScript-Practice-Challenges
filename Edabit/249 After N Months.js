//Create a function that takes in year and months as input, then return what year it would be after n-months have elapsed.
function afterNMonths(year, months) {
    if (months === undefined) return "month missing";
    if (year === undefined) return "year missing";
    return year + Math.floor(months / 12);
}
import { assertEquals } from '../testHelper.js';
assertEquals(afterNMonths(2020, 24), 2022)
assertEquals(afterNMonths(1832, 2), 1832)
assertEquals(afterNMonths(1444, 60), 1449)
assertEquals(afterNMonths(2020, undefined), "month missing")
assertEquals(afterNMonths(undefined, 2), "year missing")
assertEquals(afterNMonths(1444, 65), 1449)
