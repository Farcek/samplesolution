"use strict";
/**
 * Created by Administrator on 6/10/2016.
 */
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var ctx = require("./context");
var api_1 = require("./api");
var route_1 = require("./route");
var app = express();
var wwwRoot = path.join(__dirname, '../sysop-www');
// init
app.use(morgan('dev'));
// view engine
var swig = require('swig');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(wwwRoot, 'views'));
app.set('view cache', false);
swig.setDefaults({
    varControls: ['[{', '}]'],
    tagControls: ['[%', '%]'],
    cmtControls: ['[#', '#]'],
    cache: false
});
// public assets
app.use('/public', express.static(path.join(wwwRoot, 'public')));
app.use('/public/*', route_1.default.web404);
app.use('/bower_components', express.static(path.join(wwwRoot, 'bower_components')));
app.use('/bower_components/*', route_1.default.web404);
// router`s
app.use('/api', new api_1.default().root);
app.use('/api/*', route_1.default.api404);
app.get('/*', route_1.default.index);
app.listen(ctx.config.sysop.port, function () {
    console.log("starting name=" + ctx.pkg.name + "; port=" + ctx.config.sysop.port);
});
