var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var refresh = require('gulp-livereload');

var sources = {
	scss: ['./bower_components/foundation/scss/foundation.scss', './scss/*.scss'],
	css: './css/app.css'
};

var tasks = {
	scss: function() {
		gulp.src(sources.scss)
			.pipe(sass())
			// .pipe(rename({suffix: '.min'}))
			// .pipe(minifyCSS())
			.pipe(gulp.dest('./css'))
			.pipe(refresh());
		}
	// livereload: function() {
 //    	server.listen(35729, function(err){
	//       	if(err) {
	//         	return console.log(err);
	//       	}
 //    	});
 //  	}
};


gulp.task('build:scss', tasks.scss);
gulp.task('livereload', tasks.livereload);
gulp.task('dev', function() {
	refresh.listen(35270);

	gulp.watch(sources.scss, function(event) {
		gulp.run('build:scss');
	});
});