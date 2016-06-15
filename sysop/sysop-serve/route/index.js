"use strict";
var SysopRoute = (function () {
    function SysopRoute() {
    }
    SysopRoute.index = function (req, res) {
        res.render('index', {
            title: 'index'
        });
    };
    SysopRoute.web404 = function (req, res) {
        res
            .status(404)
            .render('404', {
            title: 'not found url'
        });
    };
    SysopRoute.api404 = function (req, res) {
        res
            .status(404)
            .json({
            message: 'not found'
        });
    };
    return SysopRoute;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SysopRoute;
