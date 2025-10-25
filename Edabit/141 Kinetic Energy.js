//Return the Kinetic Energy in Joules, given the mass and velocity.
//For the purposes of this challenge, round answers to the nearest integer.
function kineticEnergy(m, v) {
    return Math.round(0.5 * m * v * v);
}
import { assertEquals } from '../testHelper.js';
assertEquals(kineticEnergy(60, 3), 270)
assertEquals(kineticEnergy(45, 10), 2250)
assertEquals(kineticEnergy(63.5, 7.35), 1715)
assertEquals(kineticEnergy(0, 7.35), 0)
assertEquals(kineticEnergy(88.4, 0), 0)
assertEquals(kineticEnergy(3.333, 5.4), 49)