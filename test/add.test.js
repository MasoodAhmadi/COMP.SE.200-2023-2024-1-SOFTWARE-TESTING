import add from '../src/add';
// const add = require('../src/add');

const assert = require('assert');

describe('Test Add Operation', () => {
  it('should return 10', () => {
    const ans = add(6, 4);
    assert.equal(ans, 10);
  });
});
