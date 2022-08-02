import {StringCalculator} from './string-calculator';
import {Logger} from './logger';

describe('Tests for 2.1', () => {
  test('logger.write should output "The sum is 6"', () => {
    console.log = jest.fn();
    const sum = 6;
    const logger = new Logger();
    logger.write(sum);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('The sum is 6');
  });
  test('stringCalculator.add() should call logger() with 10 for "2,3,5"', () => {
    const loggerWriteMock = jest
      .spyOn(Logger.prototype, 'write')
      .mockImplementation();
    const val = '2,3,5';
    const result = 10;
    const stringCalculator = new StringCalculator();
    stringCalculator.add(val);
    expect(loggerWriteMock).toHaveBeenCalled();
    expect(loggerWriteMock).toHaveBeenCalledWith(result);
  });
});
