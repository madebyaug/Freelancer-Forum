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
  const name = NAMES[rngNames];

  const rngOccupation = Math.floor(Math.random() * OCCUPATIONS.length);
  const occupation = OCCUPATIONS[rngOccupation];

  // found this here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const rngPriceRange = Math.floor(Math.random() * 180 + 20);
  const rate = rngPriceRange;

  return {
    name: name,
    occupation: occupation,
    rate: rate,
  };
}

// 2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
const rngFreelancerArry = []; // create array ONCE

for (let i = 0; i < NUM_FREELANCERS; i++) {
  // Always forget to add the "()" when calling a function
  rngFreelancerArry.push(rngFreelancerObject());
}

// 3. Write a function that returns the average rate of all freelancers in state.
function getAverageRate(rngFreelancerArry) {
  const sum = rngFreelancerArry.reduce((getsum, rngFreelancerObject) => {
    getsum = getsum + rngFreelancerObject.rate;
    return getsum;
  }, 0);
  return sum / rngFreelancerArry.length;
}

// 4. Use that function to initialize a state variable which will store the average rate of all freelancers.
// This wasn't too difficult
function allAverageRates() {
  const rngAverageRate = getAverageRate(rngFreelancerArry);
  return rngAverageRate;
}

// 5. Write a component function to represent a single freelancer.
// I keep wanting to use a "+" after the string instead of ",".
const singleFreelancer = rngFreelancerObject();
console.log(`Here is a single freelancer: `, singleFreelancer);

// 6. Write a component function to represent an array of freelancers.
const arryFreelancer = rngFreelancerArry;
console.log(
  `Here is an array of ${rngFreelancerArry.length} freelancers: `,
  arryFreelancer
);

// 7. Write a component function to represent the average rate of all freelancers.
const averageFreelancerRates = allAverageRates();
console.log(`Here is the average rate: $${averageFreelancerRates.toFixed(2)}`);

// 8. Write and call a render function that will mount the application onto the document.

// const freelancercontainer = $document.querySelector("#app");
// freelancercontainer.style.border =

// APPENDIX - learning how to code UI with js //

// Header
const singleFreelancerUI = document.createElement("h1");
singleFreelancerUI.textContent = "Freelancer Forum";
singleFreelancerUI.style.fontSize = "30px";
singleFreelancerUI.style.letterSpacing = "-.04rem";

document.querySelector("#app").append(singleFreelancerUI);

// Subheader
const averageRateUI = document.createElement("h2");
averageRateUI.textContent = `Here is the average rate: $${averageFreelancerRates.toFixed(
  2
)}`;
averageRateUI.style.fontSize = "15px";
averageRateUI.style.letterSpacing = "-.04rem";

document.querySelector("#app").append(averageRateUI);

// Text
const freelancerUI = document.createElement("p");
freelancerUI.textContent = `Here is an array of ${
  rngFreelancerArry.length
} freelancers:
  ${JSON.stringify(arryFreelancer, null, 2)}`;
freelancerUI.style.fontSize = "12px";
freelancerUI.style.letterSpacing = "-.04rem";

document.querySelector("#app").append(freelancerUI);
