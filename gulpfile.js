var gulp = require("gulp");

var buildDirectory = "_build";

gulp.task("build", function() {
    gulp.src("src/app.ts")
        .pipe(gulp.dest(buildDirectory));
});

gulp.task("default", ["build"]);
