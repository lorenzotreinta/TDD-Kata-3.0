"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
const logger_1 = require("./logger");
class ConsoleLogger extends logger_1.Logger {
    write(sum) {
        console.log('The sum is ' + sum);
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=console-logger.js.map