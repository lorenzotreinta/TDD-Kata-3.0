"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCalculator = void 0;
class StringCalculator {
    add(str_values) {
        const valuesObj = { str_values: str_values };
        const mask = this.getDelimMask(valuesObj);
        str_values = valuesObj.str_values;
        console.log(mask);
        const values = str_values.split(mask);
        if (values.length === 0) {
            return 0;
        }
        const sum = values.reduce((prev_sum, cur_val) => {
            return prev_sum + +cur_val;
        }, 0);
        return sum;
    }
    getDelimMask(valuesObj) {
        let delim = ',';
        if (valuesObj.str_values.length >= 3 &&
            valuesObj.str_values.slice(0, 2) === '//') {
            const delim_end_idx = valuesObj.str_values.indexOf('\n');
            delim = valuesObj.str_values.slice(2, delim_end_idx);
            valuesObj.str_values = valuesObj.str_values.slice(delim_end_idx + 1);
        }
        const mask = new RegExp('\n|[' + delim + ']');
        return mask;
    }
}
exports.StringCalculator = StringCalculator;
//# sourceMappingURL=string-calculator.js.map