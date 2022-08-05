export abstract class Logger {
  abstract write(sum: number);
}

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

export class ConsoleLogger extends Logger {
  write(sum: number) {
    console.log('The sum is ' + sum);
  }
}
