"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebserviceMock = void 0;
const webservice_1 = require("./webservice");
class WebserviceMock extends webservice_1.Webservice {
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
//# sourceMappingURL=webservice-mock.js.map