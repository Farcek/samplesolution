var gulp = require('gulp');
var sass = require('gulp-sass');
var debug = require('gulp-debug');


var sassPath = 'public/style/**/*.scss';

gulp.task('sass', function () {
    return gulp
        .src(sassPath, { base: '.' })
        .pipe(debug({ title: 'resolve:' }))
        .pipe(sass().on('error', sass.logError))
        .pipe(debug({ title: 'build:' }))
        .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function () {
    gulp.watch(sassPath, ['sass']);
});

gulp.task('default', function () {
    var tasks = ['sass', 'sass:watch'];
    console.log('please use :', tasks.join(', '));
});