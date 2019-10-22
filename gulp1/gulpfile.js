const gulp = require("gulp")
const uglify = require("gulp-uglify")

gulp.task("aaa", () => {
    return gulp.src(["./www/a.txt"])
        .pipe(uglify())
        .pipe(gulp.dest("./build"));
})

gulp.task("default", ["aaa"])

// const { src, dest } = require('gulp');

// function copy() {
//     return src('./www/a.js')
//         .pipe(uglify())
//         .pipe(dest('./build/js'));
// }

// exports.default = copy;