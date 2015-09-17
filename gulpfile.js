var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

gulp.task('compileSass', function() {
	gulp.src('./scss/*.scss')
	.pipe(sass()
	.on('error', function(err) {
		notify().write(err);
		this.emit('end');
	}))
	.pipe(gulp.dest('./css'))
	.pipe(notify('It worked!'));
});

gulp.task('watch', function() {
	gulp.watch('./scss/**/*.scss', ['compileSass']);
});

gulp.task('build', ['compileSass']);