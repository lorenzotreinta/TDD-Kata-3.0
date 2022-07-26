"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCalculator = void 0;
class StringCalculator {
    add(str_values) {
        const mask = new RegExp(',|\n');
        const values = str_values.split(mask);
        if (values.length === 0) {
            return 0;
        }
        const sum = values.reduce((prev_sum, cur_val) => {
            return prev_sum + +cur_val;
        }, 0);
        return sum;
    }
}
exports.StringCalculator = StringCalculator;
//# sourceMappingURL=string-calculator.js.map