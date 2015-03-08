var gulp = require('gulp')
  , browserify = require('browserify')
  , babelify = require('babelify')
  , source = require('vinyl-source-stream');

gulp.task('modules', function () {
  browserify({
    entries: './app/js/main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./dist/js'));
});