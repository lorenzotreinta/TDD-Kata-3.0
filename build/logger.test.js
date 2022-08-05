"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_calculator_1 = require("./string-calculator");
const logger_1 = require("./logger");
const webservice_1 = require("./webservice");
describe('Tests for 2.1', () => {
    test('loggerErrorMock.write should return error', () => {
        const sum = 6;
        const error = new Error('Out of range');
        const loggerErrorMock = new logger_1.LoggerErrorMock(error);
        expect(loggerErrorMock.write(sum)).toBe(error);
        expect(loggerErrorMock.error).toBe(error);
    });
    test('LoggerParamMock.write should not return and stores the .write() param', () => {
        const sum = 6;
        const loggerParamMock = new logger_1.LoggerParamMock();
        expect(loggerParamMock.write(sum)).toBeUndefined();
        expect(loggerParamMock.sum).toBe(sum);
    });
    test('ConsoleLogger.write should not return', () => {
        const sum = 6;
        const consoleLogger = new logger_1.ConsoleLogger();
        expect(consoleLogger.write(sum)).toBeUndefined();
    });
    test('stringCalculator.add() should call logger() with 10 for "2,3,5"', () => {
        const loggerMock = new logger_1.LoggerParamMock();
        const val = '2,3,5';
        const result = 10;
        const stringCalculator = new string_calculator_1.StringCalculator(loggerMock, new webservice_1.ConsoleWebservice());
        stringCalculator.add(val);
        expect(loggerMock.sum).toBe(result);
    });
});
describe('Tests for 2.2', () => {
    test('webserviceMock.logError should not return.', () => {
        const webservice = new webservice_1.WebserviceMock();
        const error = new Error();
        expect(webservice.logError(error)).toBe(error);
        expect(webservice.error).toBe(error);
    });
    test('ConsoleWebservice.logError should not return.', () => {
        const webservice = new webservice_1.ConsoleWebservice();
        const error = new Error();
        expect(webservice.logError(error)).toBeUndefined();
    });
    test('when logger() throws an error, webservice.logError is invoked to log it.', () => {
        const error = new Error('Out of range');
        const loggerErrorMock = new logger_1.LoggerErrorMock(error);
        const webServiceMock = new webservice_1.WebserviceMock();
        const stringCalculator = new string_calculator_1.StringCalculator(loggerErrorMock, webServiceMock);
        stringCalculator.add('');
        expect(loggerErrorMock.error).toBe(error);
        expect(webServiceMock.error).toBe(error);
    });
});
//# sourceMappingURL=logger.test.js.map