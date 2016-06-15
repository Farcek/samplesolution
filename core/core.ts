import * as conf from "./config/index";
import Model from "./model";

export const config = conf;

export const model = new Model({
    database: conf.db.database,
    username: conf.db.username,
    password: conf.db.password,

    host: conf.db.host,
    dialect: conf.db.dialect,

    pool: conf.db.pool,
    logging: console.log
});