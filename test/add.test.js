import add from '../src/add';

const assert = require('assert');

describe('Test Add Operation', () => {
  it('should return 10', () => {
    const ans = addOperations(6, 4);
    assert.equal(ans, 10);
  });
});
