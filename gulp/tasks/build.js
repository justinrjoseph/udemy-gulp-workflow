let gulp = require('gulp'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewDocs', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs'
    }
  });
});

gulp.task('deleteDocsFolder', ['icons'], () => del('./docs'));

gulp.task('copyMiscFiles', ['deleteDocsFolder'], () => {
  var pathsToFiles = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ];

  return gulp.src(pathsToFiles)
             .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDocsFolder'], () => {
  return gulp.src([
    './app/assets/images/**/*',
    '!./app/assets/images/icons',
    '!./app/assets/images/icons/**/*'
  ])
   .pipe(imagemin({
     progressive: true,
     interlaced: true,
     multipass: true
   }))
   .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDocsFolder'], () => gulp.start('usemin'));

gulp.task('usemin', ['styles', 'js'], () => {
  return gulp.src('./app/index.html')
             .pipe(usemin({
               css: [() => rev(), () => cssnano()],
               js: [() => rev(), () => uglify()]
             }))
             .pipe(gulp.dest('./docs'));
});

gulp.task('build', [
  'deleteDocsFolder',
  'copyMiscFiles',
  'optimizeImages',
  'useminTrigger'
]);
