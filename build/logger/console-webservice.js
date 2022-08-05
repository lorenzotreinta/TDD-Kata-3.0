"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleWebservice = void 0;
const webservice_1 = require("./webservice");
class ConsoleWebservice extends webservice_1.Webservice {
    logError(error) {
        console.log(error.message);
    }
}
exports.ConsoleWebservice = ConsoleWebservice;
//# sourceMappingURL=console-webservice.js.map