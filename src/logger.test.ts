import {StringCalculator} from './string-calculator';
import {Logger} from './logger';
import {Webservice} from './webservice';

describe('Tests for 2.1', () => {
  test('logger.write should not return', () => {
    const sum = 6;
    const logger = new Logger();
    expect(logger.write(sum)).toBeUndefined();
  });
  test('stringCalculator.add() should call logger() with 10 for "2,3,5"', () => {
    const loggerWriteMock = jest
      .spyOn(Logger.prototype, 'write')
      .mockImplementation();
    const val = '2,3,5';
    const result = 10;
    const stringCalculator = new StringCalculator(
      new Logger(),
      new Webservice()
    );
    stringCalculator.add(val);
    expect(loggerWriteMock).toHaveBeenCalledWith(result);
  });
});

describe('Tests for 2.2', () => {
  test('webservice.logError should not return.', () => {
    const webservice = new Webservice();
    const error = new Error();
    expect(webservice.logError(error)).toBeUndefined();
  });
  test('when logger() throws an error, webservice.logError is invoked to log it.', () => {
    const loggerErrorMock = jest
      .spyOn(Logger.prototype, 'write')
      .mockImplementationOnce(() => {
        throw new Error();
      });
    const webServiceMock = jest.spyOn(Webservice.prototype, 'logError');
    const stringCalculator = new StringCalculator(
      new Logger(),
      new Webservice()
    );
    stringCalculator.add('');
    expect(webServiceMock).toBeCalledWith(Error());
  });
});
