//Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.
function filterString(txt) {
    return txt.split("").reduce((a, c) => {
        if (c >= "A" && c <= "Z") {
            a[0]++
        } else if (c >= "a" && c <= "z") {
            a[1]++
        } else if (c >= "0" && c <= "9") {
            a[2]++
        } else {
            a[3]++     
        }
        return a
        }, [0, 0, 0, 0])
}
import { assertEquals } from '../testHelper.js';
assertEquals(filterString("*$(#Mu12bas43hiR%@*!"), [2, 6, 4, 8])
assertEquals(filterString("^^Edabit^^%$#12379"), [1, 5, 5, 7])
assertEquals(filterString("123PakisTan#$%"), [2, 6, 3, 3])
assertEquals(filterString("**Airforce1**"), [1, 7, 1, 4])
assertEquals(filterString("bgA5<1d-tOwUZTS8yQ"), [7, 6, 3, 2])
assertEquals(filterString("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9, 9, 6, 9])
assertEquals(filterString("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15, 8, 6, 9])
assertEquals(filterString("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10, 7, 3, 6])
assertEquals(filterString("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7, 13, 4, 10])