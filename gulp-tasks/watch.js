var gulp = require('gulp');


gulp.task('watch', ['build'], function(){
	gulp.watch('src/scripts/**/*.js', ['scripts']);
	gulp.watch('src/styles/**/*.scss', ['styles']);
	gulp.watch('src/views/**/*.jade', ['templates']);
	gulp.watch('src/assets/**/*.*', ['build']);
})