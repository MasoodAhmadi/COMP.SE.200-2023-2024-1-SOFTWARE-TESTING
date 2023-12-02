import memoize from '../src/memoize';

describe('memorize', () => {
  let memoizedAdd, result1, result2;
  it('should memoize the result of a function', () => {
    memoizedAdd = memoize((a, b) => a + b);

    result1 = memoizedAdd(1, 2);
    result2 = memoizedAdd(1, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(3);
  });

  it('should use the provided resolver to determine the cache key', () => {
    const memoizedToUpper = memoize(
      (str) => str.toUpperCase(),
      (str) => str[0]
    );

    result1 = memoizedToUpper('hello');
    result2 = memoizedToUpper('world');

    expect(result1).toBe('HELLO');
    expect(result2).toBe('WORLD');
  });

  it('should modify the result cache', () => {
    memoizedAdd = memoize((a, b) => a + b);

    result1 = memoizedAdd(1, 2);
    memoizedAdd.cache.set(1, 10);
    result2 = memoizedAdd(1, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(10);
  });

  it('should throw an error if the provided function is not a function', () => {
    expect(() => memoize('not a function')).toThrowError('Expected a function');
    expect(() => memoize(() => {}, 'not a function')).toThrowError(
      'Expected a function'
    );
  });
});
