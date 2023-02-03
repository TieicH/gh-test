const { sum, res } = require("./helper");

describe('WHEN testing', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('res 2 - 1 to equal 1', () => {
    expect(res(2, 1)).toBe(1);
  });
})
