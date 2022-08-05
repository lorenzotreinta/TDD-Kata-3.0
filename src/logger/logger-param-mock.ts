import {Logger} from './logger';

export class LoggerParamMock extends Logger {
  sum: number;
  constructor() {
    super();
    this.sum = null;
  }
  write(sum: number) {
    this.sum = sum;
  }
}
