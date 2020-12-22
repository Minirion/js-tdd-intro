const assert = require('assert');

assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('i love tdd'), 'I Love Tdd');

assert.strictEqual(capitalizeFirst('coucou'), 'Coucou');

assert.strictEqual(capitalizeFirst(''), '');