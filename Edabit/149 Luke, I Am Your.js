/*Luke Skywalker has family and friends.
Help him remind them who is who.Given a string with a name, return the relation of that person to Luke.
Test.assertEquals(relationToLuke("Darth Vader"), "Luke, I am your father.")
Test.assertEquals(relationToLuke("Leia"), "Luke, I am your sister.")
Test.assertEquals(relationToLuke("Han"), "Luke, I am your brother in law.")
Test.assertEquals(relationToLuke("R2D2"), "Luke, I am your droid.")*/
function relationToLuke(name) {
     switch (name) {
         case "Darth Vader":
             return "Luke, I am your father.";
         case "Leia":
             return "Luke, I am your sister.";
         case "Han":
             return "Luke, I am your brother in law.";
         default:
             return "Luke, I am your droid.";
    };
}
import { assertEquals } from '../testHelper.js';
assertEquals(relationToLuke("Darth Vader"), "Luke, I am your father.")
assertEquals(relationToLuke("Leia"), "Luke, I am your sister.")
assertEquals(relationToLuke("Han"), "Luke, I am your brother in law.")
assertEquals(relationToLuke("R2D2"), "Luke, I am your droid.")