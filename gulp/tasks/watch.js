var gulp   = require('gulp')
  , config = require('../config')

gulp.task('watch', ['browserSync', 'server'], function() {

  // Scripts are automatically watched by Watchify inside Browserify task
  gulp.watch(config.styles.src,                 ['sass']);
  gulp.watch(config.images.src,                 ['imagemin']);
  gulp.watch(config.sourceDir + 'index.html',   ['copyIndex']);

});