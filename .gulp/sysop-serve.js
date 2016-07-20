var gulp = require('gulp');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

var spawn = require('child_process').spawn,
    sysopServe;

var sysopServeRoot = "sysop-serve";



gulp.task('sysop-serve-start', ['sysop-serve-ts','core-ts'], function () {
    if (sysopServe) sysopServe.kill();

    sysopServe = spawn('node', [sysopServeRoot + '/build/serve.js'], {
        stdio: 'inherit'
    })
    sysopServe.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });

});

process.on('exit', function () {
    if (sysopServe) sysopServe.kill();
});


gulp.task('sysop-serve-ts', shell.task("tsc -p " + sysopServeRoot + "/tsconfig.json"));
gulp.task('sysop-serve-build', ['sysop-serve-ts']);

gulp.task('sysop-serve-start-build', function (callback) {
    runSequence('sysop-serve-ts', 'core-ts', 'sysop-serve-start', callback);
});
gulp.task('sysop-serve-start-from-me', function (callback) {
    runSequence('sysop-serve-ts', 'sysop-serve-start', callback);
});
gulp.task('sysop-serve-start-from-core', function (callback) {
    runSequence('core-ts', 'sysop-serve-start', callback);
});

gulp.task('sysop-serve-watch', ['sysop-serve-start-build'], function () {
    gulp.watch([sysopServeRoot + '/**/*.ts'], ['sysop-serve-start-from-me']);
    gulp.watch(['core/src/**/*.ts'], ['sysop-serve-start-from-core']);
});





