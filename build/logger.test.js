"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const string_calculator_1 = require("./string-calculator");
jest.mock('./logger');
describe('Part 2.1 tests', () => {
    test('logger.write should output "The sum is 6"', () => {
        const logger = new logger_1.Logger();
        const logSpy = jest.spyOn(console, 'log');
        logger.write(6);
        expect(logSpy).toHaveBeenCalledWith('The sum is 6');
    });
    test('stringCalculator.add() calls logger.write() for sum "6" of "2,3".', () => {
        const request = '2,3';
        const stringCalculator = new string_calculator_1.StringCalculator();
        stringCalculator.add(request);
        expect(logger_1.Logger).toHaveBeenCalledWith(5);
    });
});
//# sourceMappingURL=logger.test.js.map