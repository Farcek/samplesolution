var gulp = require('gulp');


gulp.task('config-copy', function () {
    return gulp.src('config/**')
        .pipe(gulp.dest('_build/config'))
        ;
});