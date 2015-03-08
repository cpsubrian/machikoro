var gulp         = require('gulp')
  , sass         = require('gulp-sass')
  , gulpif       = require('gulp-if')
  , browserSync  = require('browser-sync')
  , autoprefixer = require('gulp-autoprefixer')
  , handleErrors = require('../util/handle-errors')
  , config       = require('../config')

gulp.task('sass', function () {

  return gulp.src(config.styles.src)
    .pipe(sass({
      sourceComments: global.isProd ? 'none' : 'map',
      sourceMap: 'sass',
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

});