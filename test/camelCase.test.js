import camelCase from '../src/camelCase';
const assert = require('assert');

describe('Upper Case Test', () => {
  it('Upper Case', () => {
    const ans = camelCase('test');
    assert.notEqual(ans, 'TEST');
  });
});
