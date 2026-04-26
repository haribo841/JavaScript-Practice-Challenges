/*Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
x   ✓	✓	hasHD
x   x   ✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price*/
class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 2;
	static hasSD = true;
	static hasHD = true;
	static hasUHD = false;
	static price = '$12.99';
}

class PremiumPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 4;
	static hasSD = true;
	static hasHD = true;
	static hasUHD = true;
	static price = '$15.99';
}
import { assertEquals } from '../testHelper.js';
assertEquals(BasicPlan.canStream, true)
assertEquals(BasicPlan.canDownload, true)
assertEquals(BasicPlan.numOfDevices, 1)
assertEquals(BasicPlan.hasSD, true)
assertEquals(BasicPlan.hasHD, false)
assertEquals(BasicPlan.hasUHD, false)
assertEquals(BasicPlan.price, '$8.99')
assertEquals(StandardPlan.canStream, true, 'Remember to add the StandardPlan class!')
assertEquals(StandardPlan.canDownload, true)
assertEquals(StandardPlan.numOfDevices, 2)
assertEquals(StandardPlan.hasSD, true)
assertEquals(StandardPlan.hasHD, true)
assertEquals(StandardPlan.hasUHD, false)
assertEquals(StandardPlan.price, '$12.99')
assertEquals(PremiumPlan.canStream, true, 'Remember to add the PremiumPlan class!')
assertEquals(PremiumPlan.canDownload, true)
assertEquals(PremiumPlan.numOfDevices, 4)
assertEquals(PremiumPlan.hasSD, true)
assertEquals(PremiumPlan.hasHD, true)
assertEquals(PremiumPlan.hasUHD, true)
assertEquals(PremiumPlan.price, '$15.99')