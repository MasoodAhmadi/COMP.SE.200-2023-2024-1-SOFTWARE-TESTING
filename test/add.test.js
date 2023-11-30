import add from '../src/add';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  it('should add positive and negative numbers', () => {
    expect(add(5, -3)).toBe(2);
  });

  it('should add decimal numbers', () => {
    expect(add(2.5, 1.5)).toBe(4);
  });

  it('should handle zero as an input', () => {
    expect(add(1, 0)).toBe(1);
    expect(add(0, 5)).toBe(5);
  });
});
