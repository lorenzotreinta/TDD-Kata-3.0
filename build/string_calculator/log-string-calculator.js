"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogStringCalculator = void 0;
const abstract_string_calculator_1 = require("./abstract-string-calculator");
class LogStringCalculator extends abstract_string_calculator_1.AbsStringCalculator {
    constructor(stringCalculator, logger, webservice) {
        super();
        this.stringCalculator;
        this.logger = logger;
        this.webservice = webservice;
    }
    add(str_values) {
        const sum = this.stringCalculator.add(str_values);
        try {
            this.logger.write(sum);
        }
        catch (e) {
            console.log(e);
            this.webservice.logError(e);
        }
        return sum;
    }
}
exports.LogStringCalculator = LogStringCalculator;
//# sourceMappingURL=log-string-calculator.js.map