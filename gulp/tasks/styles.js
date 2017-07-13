let gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    variables = require('postcss-simple-vars'),
    nesting = require('postcss-nested'),
    cssImporting = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hex2rgba = require('postcss-hexrgba'),
    browserSync = require('browser-sync').create();

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postCss([
               cssImporting,
               variables,
               hex2rgba,
               mixins,
               nesting,
               autoprefixer
             ]))
             .on('error', function(error) {
               console.log(error.toString());
               this.emit('end');
             })
             .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./app/temp/styles/styles.css')
             .pipe(browserSync.stream());
});
