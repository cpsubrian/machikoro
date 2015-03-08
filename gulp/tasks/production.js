var gulp        = require('gulp')
  , runSequence = require('run-sequence')

gulp.task('prod', ['clean'], function(callback) {

  callback = callback || function() {};

  global.isProd = true;

  runSequence(['sass', 'imagemin', 'browserify', 'copyFonts', 'copyIndex', 'copyIcons'], callback);

});