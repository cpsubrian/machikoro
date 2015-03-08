var gulp   = require('gulp')
  , config = require('../config')

gulp.task('copyFonts', function() {

  gulp.src(config.sourceDir + 'fonts/**/*').pipe(gulp.dest(config.buildDir + 'fonts/'));

});