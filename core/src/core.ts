import Model from "./model";

export const config:time.config.IConfig = require("../../config");

export const model = new Model({
    database: config.db.database,
    username: config.db.username,
    password: config.db.password,

    host: config.db.host,
    dialect: config.db.dialect,

    pool: config.db.pool,
    logging: console.log
});