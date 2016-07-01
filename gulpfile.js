var gulp = require('gulp');

require('./.gulp/config');
require('./.gulp/migration');
require('./.gulp/sysop-www');
require('./.gulp/sysop-serve');

gulp.task('default', function () {
    console.log('hi farcek');
});

gulp.task('sysop-watch', ['sysop-serve-watch','sysop-www-watch']);
gulp.task('sysop-build', ['sysop-serve-build','sysop-www-build']);