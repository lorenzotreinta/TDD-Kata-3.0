import { Logger } from './logger';
import { Webservice } from './webservice';
export declare class StringCalculator {
    logger: Logger;
    webservice: Webservice;
    constructor(logger: Logger, webservice: Webservice);
    add(str_values: string): number;
    getDelimMask(valuesObj: any): RegExp;
    callNegError(values: any): void;
}
