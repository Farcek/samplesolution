"use strict";
var Sequelize = require('sequelize');
exports.idIntIncrement = {
    type: Sequelize.INTEGER,
    field: "id",
    primaryKey: true,
    autoIncrement: true,
};
exports.idInt = {
    type: Sequelize.INTEGER,
    field: "id",
    primaryKey: true
};
exports.name = {
    type: Sequelize.STRING,
    field: "name",
    allowNull: false
};
