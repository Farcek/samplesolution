var gulp = require('gulp');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

var spawn = require('child_process').spawn,
    webServe;

var webServeRoot = "web-serve";


gulp.task('web-serve-start', function () {
    if (webServe) webServe.kill();

    webServe = spawn('node', [webServeRoot + '/build/serve.js'], {
        stdio: 'inherit'
    })
    webServe.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
});

process.on('exit', function () {
    if (webServe) webServe.kill();
});


gulp.task('web-serve-ts', shell.task("tsc -p " + webServeRoot + "/tsconfig.json"));
gulp.task('web-serve-build', ['web-serve-ts']);

gulp.task('web-serve-start-build', function (callback) {
    runSequence('web-serve-ts', 'core-ts', 'web-serve-start', callback);
});
gulp.task('web-serve-start-from-me', function (callback) {
    runSequence('web-serve-ts', 'web-serve-start', callback);
});
gulp.task('web-serve-start-from-core', function (callback) {
    runSequence('core-ts', 'web-serve-start', callback);
});

gulp.task('web-serve-watch', ['web-serve-start-build'], function () {
    gulp.watch([webServeRoot + '/**/*.ts'], ['web-serve-start-from-me']);
    gulp.watch(['core/src/**/*.ts'], ['web-serve-start-from-core']);
});