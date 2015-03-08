var gulp        = require('gulp')
  , gulpif      = require('gulp-if')
  , imagemin    = require('gulp-imagemin')
  , browserSync = require('browser-sync')
  , config      = require('../config')

gulp.task('imagemin', function() {

  // Run imagemin task on all images
  return gulp.src(config.images.src)
    .pipe(gulpif(global.isProd, imagemin()))
    .pipe(gulp.dest(config.images.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));

});