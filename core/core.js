"use strict";
var conf = require("./config/index");
var model_1 = require("./model");
exports.config = conf;
exports.model = new model_1.default({
    database: conf.db.database,
    username: conf.db.username,
    password: conf.db.password,
    host: conf.db.host,
    dialect: conf.db.dialect,
    pool: conf.db.pool,
    logging: console.log
});
