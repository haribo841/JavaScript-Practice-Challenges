//Create a function that takes a string and changes the word amazing to not amazing.
//Return the string without any change if the word edabit is part of the string.
function amazingEdabit(str) {
    return str.includes("edabit") ? str : str.replace(/amazing/g, "not amazing");
}
import { assertEquals } from '../testHelper.js';
assertEquals(amazingEdabit("edabit is amazing."), "edabit is amazing.")
assertEquals(amazingEdabit("Mubashir is amazing."), "Mubashir is not amazing.")
assertEquals(amazingEdabit("Trump is amazing."), "Trump is not amazing.")
assertEquals(amazingEdabit("Infinity is amazing."), "Infinity is not amazing.")
assertEquals(amazingEdabit("Mubashir and edabit are amazing."), "Mubashir and edabit are amazing.")
assertEquals(amazingEdabit("Matt is amazing."), "Matt is not amazing.")
assertEquals(amazingEdabit("Helen is amazing."), "Helen is not amazing.")
assertEquals(amazingEdabit("Python and edabit are amazing."), "Python and edabit are amazing.")
assertEquals(amazingEdabit("C++ is amazing."), "C++ is not amazing.")
assertEquals(amazingEdabit("javascript is amazing."), "javascript is not amazing.")
assertEquals(amazingEdabit("java is amazing."), "java is not amazing.")
assertEquals(amazingEdabit("ruby is amazing."), "ruby is not amazing.")
assertEquals(amazingEdabit("SQL is amazing."), "SQL is not amazing.")
assertEquals(amazingEdabit("CSS is amazing."), "CSS is not amazing.")
assertEquals(amazingEdabit("Pakistan is amazing. edabit"), "Pakistan is amazing. edabit")
assertEquals(amazingEdabit("You and edabit are amazing."), "You and edabit are amazing.")
assertEquals(amazingEdabit("Matt and edabit are amazing."), "Matt and edabit are amazing.")
assertEquals(amazingEdabit("Helen and edabit are amazing."), "Helen and edabit are amazing.")
assertEquals(amazingEdabit("Everyone is amazing."), "Everyone is not amazing.")
assertEquals(amazingEdabit("Swift and edabit are amazing."), "Swift and edabit are amazing.")