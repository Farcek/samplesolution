declare namespace time.config {
    interface IDB {
        database: string;
        username: string;
        password: string;

        host: string;
        port: number;

        dialect: string;
        pool: any;
    }
    interface ISysop {
        baseUri: string;
        port: number;
    }
    interface IWeb {
        baseUri: string;
        port: number;
    }

    interface IConfig {
        db: IDB,
        web: IWeb,
        sysop: ISysop
    }
}