var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postCss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    variables = require('postcss-simple-vars'),
    nesting = require('postcss-nested'),
    cssImporting = require('postcss-import'),
    mixins = require('postcss-mixins'),
    browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postCss([cssImporting, variables, mixins, nesting, autoprefixer]))
             .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
             .pipe(browserSync.stream());
});

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

});
