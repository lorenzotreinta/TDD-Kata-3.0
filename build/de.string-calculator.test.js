"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_calculator_1 = require("./string-calculator");
const stringCalculator = new string_calculator_1.StringCalculator();
describe('Part 1 Test', () => {
    it('should return 0', () => {
        expect(stringCalculator.add('')).toBe(0);
    });
    it('should return 1', () => {
        expect(stringCalculator.add('1')).toBe(1);
    });
    it('should return 2', () => {
        expect(stringCalculator.add('1,1')).toBe(2);
    });
    it('should return 10', () => {
        expect(stringCalculator.add('4,6')).toBe(10);
    });
});
//# sourceMappingURL=de.string-calculator.test.js.map