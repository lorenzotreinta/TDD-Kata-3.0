import { Logger } from './logger';
export declare class LoggerParamMock extends Logger {
    sum: number;
    constructor();
    write(sum: number): void;
}
