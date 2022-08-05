import {Logger} from './logger';

export class LoggerErrorMock extends Logger {
  error: Error;
  constructor(error: Error) {
    super();
    this.error = error;
  }
  write(sum: number) {
    throw this.error;
  }
}
