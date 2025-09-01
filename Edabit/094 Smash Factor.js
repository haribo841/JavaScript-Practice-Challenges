//Create a function that takes ball speed bs and club speed cs as arguments and returns the smash factor to the nearest hundredth.
function smashFactor(bs, cs) {
    return Math.round((bs / cs) * 100) / 100;
}
import { assertEquals } from '../testHelper.js';
assertEquals(smashFactor(139.4, 93.8), 1.49)
assertEquals(smashFactor(181.2, 124.5), 1.46)
assertEquals(smashFactor(154.7, 104.3), 1.48)