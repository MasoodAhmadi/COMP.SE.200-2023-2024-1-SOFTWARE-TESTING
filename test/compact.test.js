import compact from '../src/compact';
const assert = require('assert');

describe('compact', () => {
  it('should handle arrays containing only falsey values', () => {
    const inputArray = [0, false, null, '', undefined, NaN];
    const expectedResult = [];

    const result = compact(inputArray);
    expect(result).toEqual(expectedResult);
  });

  // it('should not mutate the original array', () => {
  //   const inputArray = [0, 1, false, 2, '', 3];
  //   const originalArray = [...inputArray];

  //   compact(inputArray);
  //   expect(inputArray).toEqual(originalArray);
  // });
});
