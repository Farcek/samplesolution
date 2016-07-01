var gulp = require('gulp');
var shell = require('gulp-shell');

var spawn = require('child_process').spawn,
    node;

var sysopServeRoot = "sysop-serve";
//var sysopServeOut = '_build/' + sysopServeRoot;


gulp.task('sysop-serve-start', ['sysop-serve-ts'], function () {
    if (node) node.kill();

    node = spawn('node', [sysopServeRoot + '/build/serve.js'], {
        stdio: 'inherit'
    })
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });

});

process.on('exit', function () {
    if (node) node.kill()
});


gulp.task('sysop-serve-ts', shell.task("tsc -p " + sysopServeRoot + "/tsconfig.json"));
gulp.task('sysop-serve-build', ['sysop-serve-ts']);


gulp.task('sysop-serve-watch', function () {
    gulp.run('sysop-serve-start');
    gulp.watch([
        sysopServeRoot + '/**/*.ts',
        'core/**/*.ts'
    ], ['sysop-serve-start']);
});