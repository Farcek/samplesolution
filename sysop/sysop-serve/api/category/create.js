"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsrouter = require("tsrouter");
var context_1 = require("../../context");
var Create = (function (_super) {
    __extends(Create, _super);
    function Create() {
        _super.apply(this, arguments);
    }
    Create.prototype.req = function (req) {
        return {
            name: req.body.name
        };
    };
    Create.prototype.valid = function (param, req) {
        return true;
    };
    Create.prototype.res = function (param, res) {
        return context_1.model.Category.create({
            name: param.name
        })
            .then(function (rsu) {
            return {
                status: "ok"
            };
        });
    };
    return Create;
}(tsrouter.TSHandler));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Create;
