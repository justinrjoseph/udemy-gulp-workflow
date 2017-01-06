var gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    variables = require('postcss-simple-vars'),
    nesting = require('postcss-nested'),
    cssImporting = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postCss([cssImporting, variables, mixins, nesting, autoprefixer]))
             .on('error', function(error) {
               console.log(error.toString());
               this.emit('end');
             })
             .pipe(gulp.dest('./app/temp/styles'));
});
