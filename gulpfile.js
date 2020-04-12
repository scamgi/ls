var gulp = require("gulp");
var ts = require("gulp-typescript");

gulp.task('default', function () {
  return gulp.src('ts/**/*.ts')
    .pipe(ts())
    .pipe(gulp.dest('js'));
});