var gulp = require('gulp');



gulp.task('watch', ['build'], function() {
    gulp.watch('src/scripts/**/*.js', { cwd: './' }, ['scripts']);
    gulp.watch('src/styles/**/*.scss', { cwd: './' }, ['styles']);
    gulp.watch('src/views/**/*.jade', { cwd: './' }, ['templates']);
    gulp.watch('src/assets/**/*.*', { cwd: './' }, ['build']);
})
