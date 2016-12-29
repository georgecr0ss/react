var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var connect = require('gulp-connect')

gulp.task('webserver', function() {
  connect.server({
    port: 3000,
    livereload: true
  });
});
gulp.task('build', function () {
  return browserify({entries: './app.js', extentions: ['.js'], debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/dist'))
})

gulp.task('watch', ['build'], function () {
  gulp.watch(['app.js', './components/**/*.js'], ['build'])
})

gulp.task('default', ['watch'])
