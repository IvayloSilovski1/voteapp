const gulp = require("gulp");
const uglify = require('gulp-uglify');


// -- top level functions
// gulp.task() - define tasks
// gulp.src() - point to files to use
// gulp.dest() -  point to folder to output
// gulp.watch() - watch files and folders for changes

// logs message
gulp.task("message", function () {
  return console.log("Gulp is running");
});

// copy all html files
gulp.task("copyHtml", function () {
  gulp.src("public/*.html").pipe(gulp.dest("dist/public"));
});


gulp.task('minify', () => {
  gulp.src('public/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/public'));
});

gulp.task('minify', () => {
  gulp.src('app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', () => {
  gulp.src('routes/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/routes'));
});

gulp.task('minify', () => {
  gulp.src('models/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/models'));
});

gulp.task('minify', () => {
  gulp.src('config/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/config'));
});


// default
gulp.task('default', ['message', 'copyHtml', 'minify']);