var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('make', function(){
    return gulp.src(["dev/js/main.js", "dev/js/services/*.js", "dev/js/directives/*.js"])
        .pipe(concat("angular-remember.js"))
        .pipe(gulp.dest('build'))
        .pipe(rename("angular-remember.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['make']);
