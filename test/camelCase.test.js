import camelCase from '../src/camelCase';

describe('Upper Case Test', () => {
  it('Upper Case', () => {
    const ans = camelCase('test');
    expect(ans).not.toBe('TEST');
  });
});
