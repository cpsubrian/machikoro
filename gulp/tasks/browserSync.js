var config      = require('../config')
  , browserSync = require('browser-sync')
  , gulp        = require('gulp')

gulp.task('browserSync', function() {

  browserSync({
    proxy: 'localhost:' + config.serverport,
    open: false
  });

});