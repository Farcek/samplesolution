"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var list_1 = require("./list");
var create_1 = require("./create");
var CategoryRoot = (function () {
    function CategoryRoot() {
        this.root = express.Router();
        this.root.get("/", new list_1.default().handler());
        this.root.post("/", bodyParser.json(), new create_1.default().handler());
    }
    return CategoryRoot;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryRoot;
