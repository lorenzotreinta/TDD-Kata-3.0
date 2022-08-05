"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerParamMock = void 0;
const logger_1 = require("./logger");
class LoggerParamMock extends logger_1.Logger {
    constructor() {
        super();
        this.sum = null;
    }
    write(sum) {
        this.sum = sum;
    }
}
exports.LoggerParamMock = LoggerParamMock;
//# sourceMappingURL=logger-param-mock.js.map