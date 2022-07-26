export class StringCalculator {
  add(str_values: string): number {
    const mask = new RegExp(',|\\n');
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
