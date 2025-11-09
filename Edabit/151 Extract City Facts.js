/*Create a function that takes an object as an argument and returns a string with facts about the city.
The city facts will need to be extracted from the object's three properties:
name
population
continent
The string should have the following format:
X has a population of Y and is situated in Z
(where X is the city name, Y is the population and Z is the continent the city is situated in).*/
function cityFacts(city) {
    return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}
import { assertEquals } from '../testHelper.js';
assertEquals(cityFacts({ name: 'Manila', population: '1,780,148', continent: 'Asia' }), 'Manila has a population of 1,780,148 and is situated in Asia')
assertEquals(cityFacts({ name: 'Melbourne', population: '4,936,349', continent: 'Australia' }), 'Melbourne has a population of 4,936,349 and is situated in Australia')
assertEquals(cityFacts({ name: 'Kampala', population: '1,507,080', continent: 'Africa' }), 'Kampala has a population of 1,507,080 and is situated in Africa')
assertEquals(cityFacts({ name: 'Buenos Aires', population: '2,891,082', continent: 'South America' }), 'Buenos Aires has a population of 2,891,082 and is situated in South America')
assertEquals(cityFacts({ name: 'Vancouver', population: '631,486', continent: 'North America' }), 'Vancouver has a population of 631,486 and is situated in North America')
assertEquals(cityFacts({ name: 'Berlin', population: '3,748,148', continent: 'Europe' }), 'Berlin has a population of 3,748,148 and is situated in Europe')