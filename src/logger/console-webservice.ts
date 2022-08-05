import {Webservice} from './webservice';

export class ConsoleWebservice extends Webservice {
  logError(error) {
    console.log(error.message);
  }
}
