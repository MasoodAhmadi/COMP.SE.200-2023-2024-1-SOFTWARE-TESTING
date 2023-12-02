import at from '../src/at';

describe('at', () => {
  let object, paths, expected, actual;
  it('should return an array of values corresponding to paths of object', () => {
    object = { a: [{ b: { c: 3 } }, 4] };
    paths = ['a[0].b.c', 'a[1]'];
    expected = [3, 4];
    actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });

  it('should handle paths with array indices', () => {
    object = { a: [1, 2, 3] };
    paths = ['a[0]', 'a[2]'];
    expected = [1, 3];
    actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });

  it('should handle paths with nested objects', () => {
    object = { a: { b: { c: 3 } }, d: 5 };
    paths = ['a.b.c', 'd'];
    expected = [3, 5];
    actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });

  it('should handle paths with undefined properties', () => {
    object = { a: {} };
    paths = ['a.b.c'];
    expected = [undefined];
    actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });

  it('should handle multiple paths', () => {
    object = { a: 1, b: 2, c: 3 };
    paths = ['a', 'b', 'c'];
    expected = [1, 2, 3];
    actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });
});
