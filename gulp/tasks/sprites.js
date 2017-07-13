let gulp = require('gulp'),
    del = require('del'),
    svgSprite = require('gulp-svg-sprite'),
    svg2Png = require('gulp-svg2png'),
    rename = require('gulp-rename');

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: () => {
          return (sprite, render) => {
            render(sprite).split('.svg').join('.png');
          }
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginSpriteClean', () => {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginSpriteClean'], () => {
  return gulp.src('./app/assets/images/icons/**/*.svg')
             .pipe(svgSprite(config))
             .pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('createSpritePngCopy', ['createSprite'], () => {
  return gulp.src('./app/temp/sprite/css/*.svg')
             .pipe(svg2Png())
             .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createSpritePngCopy'], () => {
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
             .pipe(gulp.dest('./app/assets/images/sprites'))
});

gulp.task('copySpriteCSS', ['createSprite'], () => {
  return gulp.src('./app/temp/sprite/css/*.css')
             .pipe(rename('_sprite.css'))
             .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endSpriteClean', ['copySpriteGraphic', 'copySpriteCSS'], () => {
  return del('./app/temp/sprite');
});

gulp.task('icons', [
  'beginSpriteClean',
  'createSprite',
  'createSpritePngCopy',
  'copySpriteGraphic',
  'copySpriteCSS',
  'endSpriteClean'
]);
