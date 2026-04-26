//There has been a masterdata issue which affected the unit of measure of the products.
//All values need to be checked if they are valid.
//The unit of measure is valid when it is either "L"(liters), "PCE"(pieces) OR when the product has a comment.
//The return value should be a Boolean.
function hasValidUnitOfMeasure(product = {}) {
	const { unitOfMeasure, comment } = product
	return (Boolean(comment) || unitOfMeasure === 'L' || unitOfMeasure === 'PCE')
}
import { assertEquals } from '../testHelper.js';
assertEquals(hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" }), true)
assertEquals(hasValidUnitOfMeasure({ "product": "Cheese", unitOfMeasure: "PCE" }), true)
assertEquals(hasValidUnitOfMeasure({ "product": "Eggs", comment: "Eggs are too different in size" }), true)
assertEquals(hasValidUnitOfMeasure({ "product": "Cerials", unitOfMeasure: "" }), false)
assertEquals(hasValidUnitOfMeasure({ "product": "Flour" }), false)
assertEquals(hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false }), false)
assertEquals(hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" }), false)
assertEquals(hasValidUnitOfMeasure(), false)