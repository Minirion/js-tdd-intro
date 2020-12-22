// test/capitalizeFirst.test.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

// give the test suite a label using describe
describe('capitalizeFirstLetters', () => {
  // give the test a label using it
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('transforms i love tdd correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('i love tdd'), 'I Love Tdd');
  });

  it('works with a 1 word string', () => {
    assert.strictEqual(capitalizeFirstLetters('coucou'), 'Coucou');
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});

