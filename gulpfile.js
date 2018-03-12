let gulp = require('gulp'),
    postcss = require('gulp-postcss');


gulp.task('css', function() {
  return gulp.src('css/style.css')
    .pipe(postcss([
      require('autoprefixer')({
    browsers: ['last 2 versions', '> 2%']
  	}),
      require('cssnano'),
      require('css-mqpacker')
    ]))
    .pipe(gulp.dest('css'));
});