export declare abstract class Webservice {
    abstract logError(error: any): any;
}
export declare class WebserviceMock extends Webservice {
    error: any;
    constructor();
    logError(error: any): any;
}
export declare class ConsoleWebservice extends Webservice {
    logError(error: any): void;
}
