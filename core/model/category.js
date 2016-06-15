"use strict";
var mixing = require('./mixing');
function define(sequelize) {
    var d;
    var options = {
        tableName: "category",
        timestamps: false,
        classMethods: {},
        instanceMethods: {}
    };
    return sequelize.define('Category', {
        id: mixing.idIntIncrement,
        name: mixing.name
    }, options);
}
exports.define = define;
