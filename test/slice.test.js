import slice from '../src/slice';

describe('slice', () => {
  let array, expectedSlice, actualSlice;
  it('should create a slice of an array from start up to, but not including, end', () => {
    array = [1, 2, 3, 4];
    expectedSlice = [3, 4];
    actualSlice = slice(array, 2);
    expect(actualSlice).toEqual(expectedSlice);
  });

  it('should return an empty array if the array is empty', () => {
    array = [];
    expectedSlice = [];
    actualSlice = slice(array, 2);
    expect(actualSlice).toEqual(expectedSlice);
  });

  it('should return an empty array if the start index is greater than the end index', () => {
    array = [1, 2, 3, 4];
    expectedSlice = [];
    actualSlice = slice(array, 4, 2);
    expect(actualSlice).toEqual(expectedSlice);
  });

  it('should handle an array of objects', () => {
    array = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
    expectedSlice = [{ c: 3 }, { d: 4 }];
    actualSlice = slice(array, 2);
    expect(actualSlice).toEqual(expectedSlice);
  });
});
