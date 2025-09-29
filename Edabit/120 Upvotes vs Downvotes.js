//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.
//This is calculated by subtracting the number of downvotes from upvotes.
function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}
import { assertEquals } from '../testHelper.js';
assertEquals(getVoteCount({ upvotes: 13, downvotes: 0 }), 13)
assertEquals(getVoteCount({ upvotes: 2, downvotes: 33 }), -31)
assertEquals(getVoteCount({ upvotes: 132, downvotes: 132 }), 0)
assertEquals(getVoteCount({ upvotes: 0, downvotes: 0 }), 0)
assertEquals(getVoteCount({ downvotes: 4, upvotes: 1 }), -3)