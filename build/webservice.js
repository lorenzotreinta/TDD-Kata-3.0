"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleWebservice = exports.WebserviceMock = exports.Webservice = void 0;
class Webservice {
}
exports.Webservice = Webservice;
class WebserviceMock extends Webservice {
    constructor() {
        super();
        this.error;
    }
    logError(error) {
        this.error = error;
        return this.error;
    }
}
exports.WebserviceMock = WebserviceMock;
class ConsoleWebservice extends Webservice {
    logError(error) {
        console.log(error.message);
    }
}
exports.ConsoleWebservice = ConsoleWebservice;
//# sourceMappingURL=webservice.js.map