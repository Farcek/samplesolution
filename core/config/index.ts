export const sysop: sample.config.ISysop = {
    baseUri : "http://localhost:3000",
    port: 3000
};
export const web: sample.config.IWeb = {
    baseUri : "http://localhost:3001",
    port: 3001
};

export const db: sample.config.IDB = {
    database: "test",
    username: "root",
    password: "1122",

    host: "localhost",
    port: 4040,

    dialect: "mysql",
    pool: false
};