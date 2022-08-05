"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_string_calculator_1 = require("src/string_calculator/log-string-calculator");
const string_calculator_1 = require("src/string_calculator/string-calculator");
const logger_error_mock_1 = require("./logger-error-mock");
const logger_param_mock_1 = require("./logger-param-mock");
const console_logger_1 = require("./console-logger");
const webservice_mock_1 = require("./webservice-mock");
const console_webservice_1 = require("./console-webservice");
describe('Tests for 2.1', () => {
    test('loggerErrorMock.write should throw "Out of memory" error', () => {
        const sum = 6;
        const error = new Error('Out of memory');
        const loggerErrorMock = new logger_error_mock_1.LoggerErrorMock(error);
        expect(() => {
            loggerErrorMock.write(sum);
        }).toThrowError('Out of memory');
        expect(loggerErrorMock.error).toBe(error);
    });
    test('LoggerParamMock.write should not return and stores the .write() param', () => {
        const sum = 6;
        const loggerParamMock = new logger_param_mock_1.LoggerParamMock();
        expect(loggerParamMock.write(sum)).toBeUndefined();
        expect(loggerParamMock.sum).toBe(sum);
    });
    test('ConsoleLogger.write should not return', () => {
        const sum = 6;
        const consoleLogger = new console_logger_1.ConsoleLogger();
        expect(consoleLogger.write(sum)).toBeUndefined();
    });
    test('stringCalculator.add() should call logger() with 10 for "2,3,5"', () => {
        const loggerMock = new logger_param_mock_1.LoggerParamMock();
        const stringCalculator = new string_calculator_1.StringCalculator();
        const val = '2,3,5';
        const result = 10;
        const logStringCalculator = new log_string_calculator_1.LogStringCalculator(stringCalculator, loggerMock, new console_webservice_1.ConsoleWebservice());
        logStringCalculator.add(val);
        expect(loggerMock.sum).toBe(result);
    });
});
describe('Tests for 2.2', () => {
    test('webserviceMock.logError should not return.', () => {
        const webservice = new webservice_mock_1.WebserviceMock();
        const error = new Error();
        expect(webservice.logError(error)).toBe(error);
        expect(webservice.error).toBe(error);
    });
    test('ConsoleWebservice.logError should not return.', () => {
        const webservice = new console_webservice_1.ConsoleWebservice();
        const error = new Error();
        expect(webservice.logError(error)).toBeUndefined();
    });
    test('when logger() throws an error, webservice.logError is invoked to log it.', () => {
        const error = new Error('Out of memory');
        const loggerErrorMock = new logger_error_mock_1.LoggerErrorMock(error);
        const webServiceMock = new webservice_mock_1.WebserviceMock();
        const stringCalculator = new string_calculator_1.StringCalculator();
        const logStringCalculator = new log_string_calculator_1.LogStringCalculator(stringCalculator, loggerErrorMock, webServiceMock);
        stringCalculator.add('1,2');
        expect(loggerErrorMock.error).toBe(error);
        expect(webServiceMock.error).toBe(error);
    });
});
//# sourceMappingURL=logger.test.js.map