var gulp = require('gulp');
var gulpif = require('gulp-if');
var debug = require('gulp-debug');
var htmlMin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var shell = require('gulp-shell');
var template = require('gulp-template');
var gulpImport = require('gulp-html-import');
var useRef = require('gulp-useref');
var sass = require('gulp-sass');


var path = require('path');
var minimist = require('minimist');


var sysopWwwRoot = "sysop-www";
var sysopWwwOut = sysopWwwRoot + '/build';

var isDev = false;
var notDevelop = function () {
    var arg = minimist(process.argv.slice(2));
    if (arg['dev']) {
        return false
    }
    return !isDev;
};

var paths = {
    htm: sysopWwwRoot + '/app/**/*.htm',
    html: sysopWwwRoot + '/views/**/*.html',
    sass: sysopWwwRoot + '/sass/**/*.scss'
};


gulp.task('sysop-www-htm', function () {
    return gulp.src(paths.htm, {base: sysopWwwRoot})
        .pipe(gulpif(notDevelop, htmlMin({
            collapseWhitespace: true
        })))
        .pipe(gulp.dest(sysopWwwOut))
        ;
});

gulp.task('sysop-www-ts', shell.task("tsc -p " + sysopWwwRoot + "/tsconfig.json"));

gulp.task('sysop-www-sass', function () {
    return gulp.src(paths.sass, {base: sysopWwwRoot})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(sysopWwwOut))
        ;
});

gulp.task('sysop-www-html', ['sysop-www-ts', 'sysop-www-sass'], function () {

    var pipe = gulp.src(paths.html, {base: sysopWwwRoot});

    if (notDevelop() && false) {
        pipe
            .pipe(template({
                vendor: "1",
                build: "1"
            }))
            .pipe(debug({title: 'ss:'}))
            .pipe(gulpImport(""))
            .pipe(
                useRef({
                    //    base : sysopWwwRoot,
                    searchPath: [sysopWwwRoot, sysopWwwOut],
                    // transformPath: function (filePath) {
                    //     console.log('filePath', filePath)
                    //     return filePath;
                    // }
                })
            )
            .pipe(debug({title: 'css:'}))
            .pipe(gulpif('*.js', uglify()))
            .pipe(gulpif('*.css', cleanCSS()))
            .on('error', console.log)
    }
    pipe
        .pipe(gulp.dest(sysopWwwOut))
    ;
    return pipe;
});


gulp.task('sysop-www-build', [
    "sysop-www-ts",
    "sysop-www-htm",
    "sysop-www-html",
    "sysop-www-sass"
]);


gulp.task('sysop-www-watch', function () {
    isDev = true;
    gulp.watch(sysopWwwRoot + '/app/**/*.ts', ['sysop-www-ts']);
    gulp.watch(paths.htm, ['sysop-www-htm']);
    gulp.watch(paths.html, ['sysop-www-html']);
    gulp.watch(paths.sass, ['sysop-www-sass']);
});