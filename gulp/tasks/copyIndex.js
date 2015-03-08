var gulp   = require('gulp')
  , config = require('../config')

gulp.task('copyIndex', function() {

  gulp.src(config.sourceDir + 'index.html').pipe(gulp.dest(config.buildDir));

});