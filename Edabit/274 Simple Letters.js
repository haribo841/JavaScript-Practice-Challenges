//Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.
function longestString(str1, str2) {
    return [...new Set(str1 + str2)].sort((left, right) => left.localeCompare(right, 'en')).join('');
}
import { assertEquals } from '../testHelper.js';
assertEquals(longestString("mubashir", "edabit"), "abdehimrstu")
assertEquals(longestString("pakistan", "airforce"), "acefiknoprst")
assertEquals(longestString("", "e"), "e")
assertEquals(longestString("", ""), "")
assertEquals(longestString("noooo", "yesssss"), "enosy")
assertEquals(longestString("aretheyhere", "yestheyarehere"), "aehrsty")
assertEquals(longestString("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
assertEquals(longestString("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
assertEquals(longestString("lordsofthefallen", "gamekult"), "adefghklmnorstu")
