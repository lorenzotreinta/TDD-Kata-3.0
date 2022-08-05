import { AbsStringCalculator } from './abstract-string-calculator';
export declare class StringCalculator extends AbsStringCalculator {
    add(str_values: string): number;
    getDelimMask(valuesObj: any): RegExp;
    callNegError(values: any): void;
}
