const assert = require('assert');
const rectangle = require('../Instance.js');

describe('rectangle', () => {
  it('isSquare', () => {
      assert.strictEqual(rectangle.isSquare(), rectangle.a === rectangle.b ? true : false);
  });

  it('getArea()', () => {
    assert.strictEqual(rectangle.getArea(), rectangle.a * rectangle.b);
  });

  it('getPerimeter()', () => {
    assert.strictEqual(rectangle.getPerimeter(), rectangle.a * 2 + rectangle.b  * 2);
  });
});