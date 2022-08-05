"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerErrorMock = void 0;
const logger_1 = require("./logger");
class LoggerErrorMock extends logger_1.Logger {
    constructor(error) {
        super();
        this.error = error;
    }
    write(sum) {
        throw this.error;
    }
}
exports.LoggerErrorMock = LoggerErrorMock;
//# sourceMappingURL=logger-error-mock.js.map