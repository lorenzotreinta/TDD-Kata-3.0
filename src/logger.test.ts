import {StringCalculator} from './string-calculator';
import {LoggerParamMock, LoggerErrorMock, ConsoleLogger} from './logger';
import {WebserviceMock, ConsoleWebservice} from './webservice';

describe('Tests for 2.1', () => {
  test('loggerErrorMock.write should throw "Out of memory" error', () => {
    const sum = 6;
    const error = new Error('Out of memory');
    const loggerErrorMock = new LoggerErrorMock(error);
    expect(() => {
      loggerErrorMock.write(sum);
    }).toThrowError('Out of memory');
    expect(loggerErrorMock.error).toBe(error);
  });
  test('LoggerParamMock.write should not return and stores the .write() param', () => {
    const sum = 6;
    const loggerParamMock = new LoggerParamMock();
    expect(loggerParamMock.write(sum)).toBeUndefined();
    expect(loggerParamMock.sum).toBe(sum);
  });
  test('ConsoleLogger.write should not return', () => {
    const sum = 6;
    const consoleLogger = new ConsoleLogger();
    expect(consoleLogger.write(sum)).toBeUndefined();
  });
  test('stringCalculator.add() should call logger() with 10 for "2,3,5"', () => {
    const loggerMock = new LoggerParamMock();
    const val = '2,3,5';
    const result = 10;
    const stringCalculator = new StringCalculator(
      loggerMock,
      new ConsoleWebservice()
    );
    stringCalculator.add(val);
    expect(loggerMock.sum).toBe(result);
  });
});

describe('Tests for 2.2', () => {
  test('webserviceMock.logError should not return.', () => {
    const webservice = new WebserviceMock();
    const error = new Error();
    expect(webservice.logError(error)).toBe(error);
    expect(webservice.error).toBe(error);
  });
  test('ConsoleWebservice.logError should not return.', () => {
    const webservice = new ConsoleWebservice();
    const error = new Error();
    expect(webservice.logError(error)).toBeUndefined();
  });
  test('when logger() throws an error, webservice.logError is invoked to log it.', () => {
    const error = new Error('Out of memory');
    const loggerErrorMock = new LoggerErrorMock(error);
    const webServiceMock = new WebserviceMock();
    const stringCalculator = new StringCalculator(
      loggerErrorMock,
      webServiceMock
    );
    stringCalculator.add('1,2');
    expect(loggerErrorMock.error).toBe(error);
    expect(webServiceMock.error).toBe(error);
  });
});
