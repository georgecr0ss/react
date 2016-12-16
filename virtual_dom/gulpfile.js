var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('webserver', function() {
  connect.server({
    port: 3003,
    livereload: true
  });
});

gulp.task('build', function() {
  return browserify({
    entries: './app.js',
    extentions: ['.js'],
    debug: true
  })
  .transform('babelify', { presets: ['es2015']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});

gulp.task('watch', ['build'],function() {
  gulp.watch('./js/**/*.js', ['build'])
});

gulp.task('default', ['webserver', 'watch'])
