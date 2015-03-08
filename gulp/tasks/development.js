var gulp        = require('gulp')
  , runSequence = require('run-sequence')

gulp.task('dev', ['clean'], function(callback) {

  callback = callback || function() {};

  global.isProd = false;

  // Run all tasks once
  return runSequence([
    'sass', 'imagemin', 'browserify', 'copyFonts', 'copyIndex', 'copyIcons'
  ], 'watch', callback);

});