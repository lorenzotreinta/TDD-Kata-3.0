import {setFlagsFromString} from 'v8';
import {Logger} from './logger';
import {Webservice} from './webservice';

export class StringCalculator {
  logger: Logger;
  webservice: Webservice;

  constructor(logger: Logger, webservice: Webservice) {
    this.logger = logger;
    this.webservice = webservice;
  }

  add(str_values: string): number {
    const valuesObj = {str_values: str_values};
    const mask = this.getDelimMask(valuesObj);
    str_values = valuesObj.str_values;
    const values = str_values.split(mask);
    if (values.length === 0) {
      return 0;
    }

    const sum = values.reduce((prev_sum, cur_val) => {
      if (cur_val[0] === '-') this.callNegError(values);
      if (+cur_val <= 1000) {
        return prev_sum + +cur_val;
      } else {
        return prev_sum;
      }
    }, 0);
    try {
      this.logger.write(sum);
    } catch (e) {
      this.webservice.logError(e);
    }
    return sum;
  }

  getDelimMask(valuesObj): RegExp {
    let delim = ',';
    if (
      valuesObj.str_values.length >= 3 &&
      valuesObj.str_values.slice(0, 2) === '//'
    ) {
      const delim_end_idx = valuesObj.str_values.indexOf('\n');
      delim = valuesObj.str_values.slice(2, delim_end_idx);
      valuesObj.str_values = valuesObj.str_values.slice(delim_end_idx + 1);
    }
    delim = delim.replace(/\]\[/g, '|');
    delim = delim.replace(/\[|\]/g, '');
    const mask = new RegExp('[' + delim + '|\n]');
    return mask;
  }

  callNegError(values) {
    let neg_error_message = 'Negatives not allowed: ';
    for (let i = 0; i < values.length; i++) {
      const cur_val = values[i];
      if (cur_val[0] === '-') {
        if (neg_error_message !== 'Negatives not allowed: ') {
          neg_error_message += ',';
        }
        neg_error_message += cur_val;
      }
    }
    throw new Error(neg_error_message);
  }
}
