let gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', () => browserSync.reload());

  watch('./app/assets/styles/**/*.css', () => gulp.start('cssInject'));

  watch('./app/assets/scripts/**/*.js', () => gulp.start('refreshJS'));
});

gulp.task('refreshJS', ['js'], () => browserSync.reload());
