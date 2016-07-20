var gulp = require('gulp');


require('./.gulp/deploy');
require('./.gulp/migration');
require('./.gulp/core');

require('./.gulp/sysop-www');
require('./.gulp/sysop-serve');

require('./.gulp/web-serve');
require('./.gulp/web-www');

gulp.task('default', function () {
    console.log('hi farcek');
});

gulp.task('sysop-watch', ['sysop-serve-watch', 'sysop-www-watch']);
gulp.task('sysop-build', ['sysop-serve-build', 'sysop-www-build']);

gulp.task('web-watch', ['web-serve-watch', 'web-www-watch']);
gulp.task('web-build', ['web-serve-build', 'web-www-build']);