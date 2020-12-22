const assert = require('assert');

function capitalizeFirstLetters (input) {
  let step1 = input.split(" ");
  let step2 = step1.map((one) => one.charAt(0).toUpperCase() + one.slice(1));
  let step3 = step2.join(" ");
  return step3;
};

assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('i love tdd'), 'I Love Tdd');

assert.strictEqual(capitalizeFirstLetters('coucou'), 'Coucou');

assert.strictEqual(capitalizeFirstLetters(''), '');

