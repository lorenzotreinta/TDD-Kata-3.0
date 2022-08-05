import {Webservice} from './webservice';

export class WebserviceMock extends Webservice {
  error;
  constructor() {
    super();
    this.error;
  }

  logError(error) {
    this.error = error;
    return this.error;
  }
}
