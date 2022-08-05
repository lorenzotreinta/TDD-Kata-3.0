export abstract class Webservice {
  abstract logError(error);
}

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

export class ConsoleWebservice extends Webservice {
  logError(error) {
    console.log(error.message);
  }
}
