/**
 * Created by Administrator on 6/10/2016.
 */



import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";

import * as ctx from "./context";

import ApiRoot from "./api";
import SysopRoute from "./route";

var app:express.Application = express();
var wwwRoot = path.join(__dirname, '../../web-www');


// init
app.use(morgan('dev'));

// view engine
var swig:{ setDefaults:any, renderFile:any } = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(wwwRoot, 'build/views'));
app.set('view cache', false);

swig.setDefaults({
    varControls: ['[{', '}]'],
    tagControls: ['[%', '%]'],
    cmtControls: ['[#', '#]'],
    cache: false
});


// public assets
app.use('/public', express.static(path.join(wwwRoot, 'public')));
app.use('/public/*', SysopRoute.web404);

app.use('/bower_components', express.static(path.join(wwwRoot, 'bower_components')));
app.use('/bower_components/*', SysopRoute.web404);

app.use('/app', express.static(path.join(wwwRoot, 'build/app')));
app.use('/app/*', SysopRoute.web404);

app.use('/sass', express.static(path.join(wwwRoot, 'build/sass')));
app.use('/sass/*', SysopRoute.web404);

// router`s
app.use('/api', new ApiRoot().root);
app.use('/api/*', SysopRoute.api404);

app.get('/*', SysopRoute.index);


app.listen(ctx.config.web.port, () => {
    console.log(`starting name=${ctx.pkg.name}; port=${ctx.config.web.port}`);
});

