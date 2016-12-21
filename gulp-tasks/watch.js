var gulp = require('gulp');


gulp.task('watch', ['build'], function(){
	gulp.watch(__dirname + '/src/scripts/**/*.js', ['scripts']);
	gulp.watch(__dirname + '/src/styles/**/*.scss', ['styles']);
	gulp.watch(__dirname + '/src/views/**/*.jade', ['templates']);
	gulp.watch(__dirname + '/src/assets/**/*.*', ['build']);
})
