var gulp         = require('gulp')
  , gulpif       = require('gulp-if')
  , gutil        = require('gulp-util')
  , source       = require('vinyl-source-stream')
  , streamify    = require('gulp-streamify')
  , rename       = require('gulp-rename')
  , watchify     = require('watchify')
  , browserify   = require('browserify')
  , babelify     = require('babelify')
  , uglify       = require('gulp-uglify')
  , browserSync  = require('browser-sync')
  , handleErrors = require('../util/handle-errors')
  , config       = require('../config')

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {

  var bundler = browserify({
    entries: [config.sourceDir + 'js/' + file],
    extensions: ['.js', '.jsx'],
    debug: !global.isProd,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  if ( watch ) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      rebundle();
      gutil.log('Rebundle...');
    });
  }

  bundler.transform(babelify);

  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', handleErrors)
    .pipe(source(file))
    .pipe(gulpif(global.isProd, streamify(uglify())))
    .pipe(streamify(rename({
      basename: 'main'
    })))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));
  }

  return rebundle();

}

gulp.task('browserify', function() {

  // Only run watchify if NOT production
  return buildScript('index.js', !global.isProd);

});