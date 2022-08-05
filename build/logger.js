"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = exports.LoggerErrorMock = exports.LoggerParamMock = exports.Logger = void 0;
class Logger {
}
exports.Logger = Logger;
class LoggerParamMock extends Logger {
    constructor() {
        super();
        this.sum = null;
    }
    write(sum) {
        this.sum = sum;
    }
}
exports.LoggerParamMock = LoggerParamMock;
class LoggerErrorMock extends Logger {
    constructor(error) {
        super();
        this.error = error;
    }
    write(sum) {
        throw this.error;
    }
}
exports.LoggerErrorMock = LoggerErrorMock;
class ConsoleLogger extends Logger {
    write(sum) {
        console.log('The sum is ' + sum);
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=logger.js.map