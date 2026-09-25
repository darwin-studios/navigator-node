export interface ApplicationResponse {
    application: ApplicationResponse.Application;
}
export declare namespace ApplicationResponse {
    interface Application {
        id: string;
        name: string;
        /** Accepts any additional properties */
        [key: string]: any;
    }
}
