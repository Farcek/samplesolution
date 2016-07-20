var gulp = require('gulp');
var GulpSSH = require('gulp-ssh');
var path = require('path');
var scp = require('gulp-scp2');
var template = require('gulp-template');

var config = require('../config');

var cp2ssh = scp({
    host: config.ssh.host,
    username: config.ssh.username,
    password: config.ssh.password,
    port: config.ssh.port,
    dest: config.ssh.deployPath
});

var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: {
        host: config.ssh.host,
        username: config.ssh.username,
        password: config.ssh.password,
        port: config.ssh.port
    }
});

gulp.task('deploy:nginx-conf', function () {
    return gulp.src('nginx.conf')
        .pipe(template({
            domain: config.solution.domain,
            sysPort: config.sysop.port,
            webPort: config.web.port
        }))
        .pipe(cp2ssh)
        .on('error', function (err) {
            console.log(err);
        })
});

gulp.task('deploy:pm2-reload', function () {
    return gulpSSH
        .shell(['cd ' + config.ssh.deployPath, 'pm2 reload all'], {filePath: 'shell.log'})
        .pipe(gulp.dest('logs'))
});

gulp.task('deploy:copy', ['sysop-build', 'web-build'], function () {
    var srcConfig = [
        'config/**/*'
    ];
    var srcCore = [
        'core/build/**/*',
        'core/package.json',
    ];
    var srcSysopServe = [
        'sysop-serve/build/**/*',
        'sysop-serve/package.json',
    ];
    var srcSysopWww = [
        'sysop-www/build/**/*',
        'sysop-www/public/**/*',
        'sysop-www/bower_components/**/*',
        'sysop-www/package.json',
    ];

    var srcWebServe = [
        'web-serve/build/**/*',
        'web-serve/package.json',
    ];
    var srcWebWww = [
        'web-www/build/**/*',
        'web-www/public/**/*',
        'web-www/bower_components/**/*',
        'web-www/package.json',
    ];
    return gulp
        .src([].concat(srcConfig, srcCore, srcSysopServe, srcSysopWww, srcWebServe, srcWebWww), {
            base: path.join(__dirname, '..')
        })
        .pipe(cp2ssh)
        .on('error', function (err) {
            console.log(err);
        });
});

