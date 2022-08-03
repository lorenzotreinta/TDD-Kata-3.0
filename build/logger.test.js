"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_calculator_1 = require("./string-calculator");
const logger_1 = require("./logger");
const webservice_1 = require("./webservice");
describe('Tests for 2.1', () => {
    test('logger.write should output "The sum is 6"', () => {
        console.log = jest.fn();
        const sum = 6;
        const logger = new logger_1.Logger();
        logger.write(sum);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('The sum is 6');
    });
    test('stringCalculator.add() should call logger() with 10 for "2,3,5"', () => {
        const loggerWriteMock = jest
            .spyOn(logger_1.Logger.prototype, 'write')
            .mockImplementation();
        const val = '2,3,5';
        const result = 10;
        const stringCalculator = new string_calculator_1.StringCalculator();
        stringCalculator.add(val);
        expect(loggerWriteMock).toHaveBeenCalledWith(result);
    });
});
describe('Tests for 2.2', () => {
    test('webservice.logError logs an error to the console.', () => {
        console.log = jest.fn();
        const webservice = new webservice_1.Webservice();
        const error = new Error();
        webservice.logError(error);
        expect(console.log).toHaveBeenCalledTimes(1);
    });
    test('when logger() throws an error, webservice.logError is invoked to log it.', () => {
        const loggerErrorMock = jest
            .spyOn(logger_1.Logger.prototype, 'write')
            .mockImplementationOnce(() => {
            throw new Error();
        });
        const webServiceMock = jest.spyOn(webservice_1.Webservice.prototype, 'logError');
        const stringCalculator = new string_calculator_1.StringCalculator();
        stringCalculator.add('');
        expect(loggerErrorMock).toHaveBeenCalled();
        expect(webServiceMock).toBeCalledWith(Error());
    });
});
//# sourceMappingURL=logger.test.js.map