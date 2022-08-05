import {Logger} from './logger';

export class ConsoleLogger extends Logger {
  write(sum: number) {
    console.log('The sum is ' + sum);
  }
}
