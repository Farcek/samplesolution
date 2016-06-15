"use strict";
var express = require("express");
var category_1 = require("./category");
var ApiRoot = (function () {
    function ApiRoot() {
        this.root = express.Router();
        this.root.use('/category', new category_1.default().root);
    }
    return ApiRoot;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ApiRoot;
