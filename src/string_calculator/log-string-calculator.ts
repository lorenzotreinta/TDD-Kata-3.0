import {AbsStringCalculator} from './abstract-string-calculator';
import {Logger} from 'src/logger/logger';
import {Webservice} from 'src/logger/webservice';

export class LogStringCalculator extends AbsStringCalculator {
  logger: Logger;
  webservice: Webservice;
  stringCalculator: AbsStringCalculator;

  constructor(
    stringCalculator: AbsStringCalculator,
    logger: Logger,
    webservice: Webservice
  ) {
    super();
    this.stringCalculator = stringCalculator;
    this.logger = logger;
    this.webservice = webservice;
  }

  add(str_values: string): number {
    const sum = this.stringCalculator.add(str_values);
    try {
      this.logger.write(sum);
    } catch (e) {
      console.log(e);
      this.webservice.logError(e);
    }
    return sum;
  }
}
