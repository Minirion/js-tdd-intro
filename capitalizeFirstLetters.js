const assert = require('assert');

// Code function
function capitalizeFirstLetters (input) {
  let step1 = input.split(" ");
  let step2 = step1.map((one) => one.charAt(0).toUpperCase() + one.slice(1));
  let step3 = step2.join(" ");
  return step3;
};

module.exports = capitalizeFirstLetters;
