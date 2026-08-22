//You call your spouse in anger and a "little" argument takes place.
//Count the total amount of insults used.
//Given an object of insults, return the total amount of insults used.
function totalAmountAdjectives(obj) {
    return Object.keys(obj).length
}
import { assertEquals } from '../testHelper.js';
const obj = { a: "moron" }
const obj2 = { a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }
const obj3 = { b: "scumbag", c: "moron", d: "dirtbag" }
const dynamic = {}
const expectedCount = 10;
for (let index = 0; index < expectedCount; index++) dynamic[index] = ".";

assertEquals(totalAmountAdjectives(obj), 1)
assertEquals(totalAmountAdjectives(obj2), 4)
assertEquals(totalAmountAdjectives(obj3), 3)
assertEquals(totalAmountAdjectives(dynamic), expectedCount)
