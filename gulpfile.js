var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');

var env = process.env.NODE_ENV || 'development';

var jsSrcFolder = './frontend/js/**/*.js';
var cssSrcFolder = './frontend/css/**/*.scss';

var jsDistFolder = './frontend/dist/js/';
var cssDistFolder = './frontend/dist/css/';

gulp.task('js',function(){
	return gulp.src(jsSrcFolder)
	.pipe(gulpif(env === 'production',uglify()))
	.pipe(gulp.dest(jsDistFolder));
});

gulp.task('sass',function(){
	return gulp.src(cssSrcFolder)
	.pipe(gulpif(env === 'production',uglify()))
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(cssDistFolder));
});

gulp.task('watch-changes',function(){
	gulp.watch(cssSrcFolder,['sass']);
});