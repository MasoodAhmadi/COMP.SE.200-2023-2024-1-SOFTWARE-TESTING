import map from "../src/map";

describe("map", () => {
  let input, expectedOutput, output, square;
  it("should map an array of numbers to their squares", () => {
    square = (n) => n * n;
    input = [4, 8];
    expectedOutput = [16, 64];
    output = map(input, square);
    expect(output).toEqual(expectedOutput);
  });

  it("should handle empty arrays", () => {
    square = (n) => n * n;
    input = [];
    expectedOutput = [];
    output = map(input, square);
    expect(output).toEqual(expectedOutput);
  });

  it("should work with objects as input", () => {
    input = [{ a: 1 }, { a: 2 }, { a: 3 }];
    expectedOutput = [2,4,6];
    output = map(input, (obj) => obj.a * 2);
    expect(output).toEqual(expectedOutput);
  });

  it("should not modify the original array", () => {
    input = [4, 8];
    square = (n) => n * n;
    map(input, square);
    expect(input).toEqual([4, 8]);
  });
});
