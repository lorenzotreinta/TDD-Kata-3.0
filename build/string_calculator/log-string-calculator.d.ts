import { AbsStringCalculator } from './abstract-string-calculator';
import { Logger } from 'src/logger/logger';
import { Webservice } from 'src/logger/webservice';
export declare class LogStringCalculator extends AbsStringCalculator {
    logger: Logger;
    webservice: Webservice;
    stringCalculator: AbsStringCalculator;
    constructor(stringCalculator: AbsStringCalculator, logger: Logger, webservice: Webservice);
    add(str_values: string): number;
}
