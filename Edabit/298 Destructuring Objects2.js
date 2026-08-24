/*Using basic object destructuring you can assign variables name and email:
let { name, email } = { name: "John", email: "john@example.com" }
console.log(name)  // "John"
console.log(email)  // "john@example.com"
What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:
let { name, email, rest } = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }
rest === { city: "Phoenix", state: "AZ", country: "USA" } // true
There is something you have to do with the variable name rest in order to assign it an object containing the rest of the object properties. 
Use the rest syntax to change the code so that rest = { city: "Phoenix", state: "AZ", address: "USA" }.Only edit the left side of the assignment { name, email, rest }. Ignore the.toString() function (used for validation).*/
const user = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }
const str = `({ name, email, ...rest } = user ).toString()`;
import { assertEquals } from '../testHelper.js';
const assignedUser = {};
({
	name: assignedUser.name,
	email: assignedUser.email,
	...assignedUser.rest
} = user);

function validUser() {
	return JSON.stringify(user) === JSON.stringify({ name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }) ? "valid" : "not valid"
}

function rightSideValidation() {
	return /\suser\s/.test(str) ? "valid" : "not valid"
}

assertEquals(validUser(), "valid", "The user object must not be changed")
assertEquals(rightSideValidation(), "valid", 'The right side of the assignment should remain as "user"')
assertEquals(assignedUser.name, "John")
assertEquals(assignedUser.email, "john@example.com")
assertEquals(assignedUser.rest, { city: "Phoenix", state: "AZ", country: "USA" }, "The variable rest has not been defined yet.")
