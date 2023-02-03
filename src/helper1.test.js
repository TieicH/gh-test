const { mult, div } = require("./helper1");

describe('WHEN testing', () => {
    it('multi 1 * 2 to equal 2', () => {
        expect(mult(1, 2)).toBe(2);
    });

    it('div 9 / 3 to equal 3', () => {
        expect(div(9, 3)).toBe(3);
    });
})
