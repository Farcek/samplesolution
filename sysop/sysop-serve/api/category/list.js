"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsrouter = require("tsrouter");
var context_1 = require("../../context");
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        _super.apply(this, arguments);
    }
    List.prototype.req = function (req) {
        return {
            limit: 10,
            page: 1
        };
    };
    List.prototype.valid = function (param, req) {
        return true;
    };
    List.prototype.res = function (param, res) {
        return context_1.model.Category.findAndCountAll({
            limit: param.limit,
            offset: param.limit * (param.page - 1)
        })
            .then(function (rsu) {
            var r = {
                total: rsu.count,
                items: rsu.rows
            };
            return r;
        });
    };
    return List;
}(tsrouter.TSHandler));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = List;
