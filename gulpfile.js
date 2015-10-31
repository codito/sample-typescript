var gulp = require("gulp");
var rimraf = require("rimraf");

var buildDirectory = "_build";

gulp.task("build", ["clean"], function() {
    gulp.src("src/app.ts")
        .pipe(gulp.dest(buildDirectory));
});

gulp.task("clean", function(done) {
    rimraf(buildDirectory, function() {
        // rimraf deletes the directory asynchronously
        done();
    });
});

gulp.task("default", ["build"]);
