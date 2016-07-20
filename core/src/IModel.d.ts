


declare namespace sample.model {
    
    export namespace category {
        export interface IAttributes {
            id?: number;
            name: string;
        }
    }
    export namespace user {
        export interface IAttributes {
            id?: number;
            username: string;
            password: string;
        }
    }
}