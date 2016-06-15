"use strict";
var Sequelize = require('sequelize');
var category = require("./category");
var Model = (function () {
    function Model(conf) {
        this.sequelize = this.sq(conf);
        this.Category = category.define(this.sequelize);
        this.associate();
        this.sync();
    }
    Model.prototype.sq = function (conf) {
        return new Sequelize(conf.database, conf.username, conf.password, {
            host: conf.host,
            dialect: conf.dialect,
            pool: conf.pool,
            logging: conf.logging
        });
    };
    Model.prototype.associate = function () {
        // Object.keys(this.sequelize.models).forEach((modelName) => {
        //     if (this.models[modelName].associate) {
        //         this.models[modelName].associate(this.models);
        //     }
        // });
    };
    Model.prototype.sync = function () {
        this.sequelize
            .sync({ force: true })
            .then(function () {
            console.log('DB. It worked!');
        }, function (err) {
            console.log('An error occurred while creating the table:', err);
        });
    };
    return Model;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Model;
