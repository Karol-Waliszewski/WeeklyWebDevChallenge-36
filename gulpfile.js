const gulp = require('gulp'),
  sass = require('gulp-sass'),
  imageMin = require('gulp-imagemin'),
  browserSync = require('browser-sync').create();

const config = {
  source: 'src/',
  destination: 'dist/'
}

gulp.task('css', () => {
  return gulp.src(config.source + 'sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(config.destination + 'css'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src(config.source + 'scripts/*.js')
    .pipe(gulp.dest(config.destination + 'js'));
});

gulp.task('fonts', () => {
  return gulp.src(config.source + 'fonts/*.*')
    .pipe(gulp.dest(config.destination + 'fonts'));
});

gulp.task('html', () => {
  return gulp.src(config.source + '*.html')
    .pipe(gulp.dest(config.destination));
});

gulp.task('img', () => {
  return gulp.src(config.source + 'img/*.*')
    .pipe(imageMin())
    .pipe(gulp.dest(config.destination + 'img'));
});

gulp.task('browserSync', () => {
  let options = {
    server: {
      baseDir: config.destination
    }
  }
  browserSync.init(options);
});

gulp.task('watch', () => {
  gulp.watch(config.source + 'sass/*.scss', ['css']);
  gulp.watch(config.source + 'scripts/*.js', ['js']);
  gulp.watch(config.source + '*.html', ['html']);

  gulp.watch(config.source + 'scripts/*.js').on('change', function() {
    setTimeout(browserSync.reload, 500);
  });
  gulp.watch(config.source + '*.html').on('change', function() {
    setTimeout(browserSync.reload, 500);
  });
})

gulp.task('default', ['css', 'html', 'js', 'img', 'fonts', 'watch']);
gulp.task('server', ['css', 'html', 'js', 'img', 'fonts', 'watch', 'browserSync']);
