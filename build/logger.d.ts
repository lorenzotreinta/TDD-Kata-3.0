export declare abstract class Logger {
    abstract write(sum: number): any;
}
export declare class LoggerParamMock extends Logger {
    sum: number;
    constructor();
    write(sum: number): void;
}
export declare class LoggerErrorMock extends Logger {
    error: Error;
    constructor(error: any);
    write(sum: number): void;
}
export declare class ConsoleLogger extends Logger {
    write(sum: number): void;
}
