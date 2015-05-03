var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var copy = require('gulp-copy');

gulp.task('make', function(){
    console.log(__dirname);
    return gulp.src(["dev/js/main.js", "dev/js/controllers/*.js", "dev/js/services/*.js", "dev/js/directives/*.js"])
        .pipe(concat("all.js"))
        .pipe(gulp.dest('build'))
        .pipe(rename("all.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});
//gulp.task('ugly', function(){
//    console.log(__dirname);
    //return gulp.src("./js/app.js")
    //    .pipe(uglify())
    //    .pipe(gulp.dest('build'));
///})

gulp.task('default', ['make']);
