var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
require("time-require")
gulp.task('webserver', function() {
  connect.server({
    port: 3003,
    livereload: true
  });
});

gulp.task('build', function() {
  return browserify({
    entries: './public/js/main.js',
    extentions: ['.js'],
    debug: true
  })
  .transform('babelify', { presets: ['es2015',
    'react']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/dist'))
  .pipe(connect.reload());
});

gulp.task('watch', ['build'],function() {
  gulp.watch('./public/js/**/*.js', ['build'])
});

gulp.task('default', ['watch'])
