//Mubashir has started his journey from home.
//Given a string of directions(N = North, W = West, S = South, E = East),
//he will walk for one minute in each direction.Determine whether
//a set of directions will lead him back to the starting position or not.
function backToHome(directions) {
    return (directions.split('N').length === directions.split('S').length) && (directions.split('E').length === directions.split('W').length);
}
import { assertEquals } from '../testHelper.js';
assertEquals(backToHome("NNNN"), false)
assertEquals(backToHome("NENESSWW"), true)
assertEquals(backToHome("NEESSW"), false)
assertEquals(backToHome("EEWE"), false)
assertEquals(backToHome("NNSSEEEWWWEW"), true)
assertEquals(backToHome("NNNNWW"), false)