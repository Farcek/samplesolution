var gulp = require('gulp');
var shell = require('gulp-shell');

var coreRoot = "core";
//var sysopServeOut = '_build/' + sysopServeRoot;




gulp.task('core-ts', shell.task("tsc -p " + coreRoot + "/tsconfig.json"));
gulp.task('core-build', ['core-ts']);

