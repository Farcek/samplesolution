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


var webWwwRoot = "web-www";
var webWwwOut = webWwwRoot + '/build';

var isDev = false;
var notDevelop = function () {
    var arg = minimist(process.argv.slice(2));
    if (arg['dev']) {
        return false
    }
    return !isDev;
};

var paths = {
    htm: webWwwRoot + '/app/**/*.htm',
    html: webWwwRoot + '/views/**/*.html',
    sass: webWwwRoot + '/sass/**/*.scss'
};


gulp.task('web-www-htm', function () {
    return gulp.src(paths.htm, {base: webWwwRoot})
        .pipe(gulpif(notDevelop, htmlMin({
            collapseWhitespace: true
        })))
        .pipe(gulp.dest(webWwwOut))
        ;
});

gulp.task('web-www-ts', shell.task("tsc -p " + webWwwRoot + "/tsconfig.json"));

gulp.task('web-www-sass', function () {
    return gulp.src(paths.sass, {base: webWwwRoot})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(webWwwOut))
        ;
});

gulp.task('web-www-html', ['web-www-ts', 'web-www-sass'], function () {

    var pipe = gulp.src(paths.html, {base: webWwwRoot});

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
                    //    base : webWwwRoot,
                    searchPath: [webWwwRoot, webWwwOut],
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
        .pipe(gulp.dest(webWwwOut))
    ;
    return pipe;
});


gulp.task('web-www-build', [
    "web-www-ts",
    "web-www-htm",
    "web-www-html",
    "web-www-sass"
]);


gulp.task('web-www-watch', function () {
    isDev = true;
    gulp.watch(webWwwRoot + '/app/**/*.ts', ['web-www-ts']);
    gulp.watch(paths.htm, ['web-www-htm']);
    gulp.watch(paths.html, ['web-www-html']);
    gulp.watch(paths.sass, ['web-www-sass']);
});