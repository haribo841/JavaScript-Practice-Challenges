//Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.
function evenOddString(txt) {
    return txt.split("").reduce((a, c, i) => {
        if (i % 2 === 0) {
            a[0] += c
        } else {
            a[1] += c
}
        return a
    }, ["", ""]).join(" ")
}
import { assertEquals } from '../testHelper.js';
assertEquals(evenOddString("mubashir"), "mbsi uahr")
assertEquals(evenOddString("edabit"), "eai dbt")
assertEquals(evenOddString("airforce"), "aroc ifre")
assertEquals(evenOddString("Wolfeschlegelsteinhausenbergerdorff"), "Wleclgltihuebredrf ofsheesenasnegrof")
assertEquals(evenOddString("METHIONYLTHREONYLTHREONYGLUTAMINYLARGINYL"), "MTINLHENLHENGUAIYAGNL EHOYTROYTROYLTMNLRIY")
assertEquals(evenOddString("PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS"), "PEMNUTAIRSOISLCVLAOOISS NUOOLRMCOCPCIIOOCNCNOI")
assertEquals(evenOddString("PSEUDOPSEUDOHYPOPARATHYROIDISM"), "PEDPEDHPPRTYODS SUOSUOYOAAHRIIM")
assertEquals(evenOddString("FLOCCINAUCINIHILIPILIFICATION"), "FOCNUIIIIIIIAIN LCIACNHLPLFCTO")
assertEquals(evenOddString("SUBDERMATOGLYPHIC"), "SBEMTGYHC UDRAOLPI")