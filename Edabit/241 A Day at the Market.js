/*Backpack Bill and Wallet Will set off for the annual festival.
As they approach the stalls, Bill retorts that he'll be able to bring home more stuff than Will.
Taking this as a challenge, Will refutes and a competition spurs into action.
Backpack Bill has an infinite inventory space, but a limited number of coins.
Wallet Will has an infinite number of coins, but a limited inventory space.
Create a function that returns the name of the man who can bring home the most items.
The parameters are given as follows:
Bill's amount of money.
Will's amount of inventory space.
The item's price.
The item's size.e*/
function whoWinsTonight(coins, space, price, size) {
    const billItems = Math.floor(coins / price);
    const willItems = Math.floor(space / size);

    if (billItems > willItems) return 'Bill';
    if (billItems < willItems) return 'Will';
    return 'Tie';
}
import { assertEquals } from '../testHelper.js';
assertEquals(whoWinsTonight(20, 20, 5, 10), 'Bill')
assertEquals(whoWinsTonight(30, 100, 1, 50), 'Bill')
assertEquals(whoWinsTonight(90, 10, 2, 5), 'Bill')

assertEquals(whoWinsTonight(10, 2, 20, 1), 'Will')
assertEquals(whoWinsTonight(40, 100, 5, 10), 'Will')
assertEquals(whoWinsTonight(5, 5, 5, 2), 'Will')

assertEquals(whoWinsTonight(3, 7, 2, 5), 'Tie')
assertEquals(whoWinsTonight(50, 50, 49, 26), 'Tie')
assertEquals(whoWinsTonight(100000, 100000, 1, 1), 'Tie')
