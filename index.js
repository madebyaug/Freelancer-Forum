/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// 1. Write a function that returns a freelancer object
// with a randomly generated name, occupation, and rate according to the provided constants.
// create randon Name, Occupation, and Rate
function rngFreelancerObject() {
  const rngNames = Math.floor(Math.random() * NAMES.length);
  console.log(NAMES[rngNames]);

  const rngOccupation = Math.floor(Math.random() * OCCUPATIONS.length);
  console.log(OCCUPATIONS[rngOccupation]);

  // found this here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const rngPriceRange = Math.floor(Math.random() * 180 + 20);
  console.log(rngPriceRange);
}
rngFreelancerObject();

// 2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
for (let i = 0; 0 < rngFreelancerObject.length; i++) {}

// 3. Write a function that returns the average rate of all freelancers in state.
// function getAverage(rngPriceRange) {
//   let sum = 0;
//   for (let i = 0; i < rngPriceRange.length; i++) sum = sum + rngPriceRange[i];
//   return sum / rngPriceRange.length;
// }
// getAverage();

// console.log(getAverage);
