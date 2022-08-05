import { Logger } from './logger';
export declare class LoggerErrorMock extends Logger {
    error: Error;
    constructor(error: Error);
    write(sum: number): void;
}
