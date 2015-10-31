var gulp = require("gulp");
var rimraf = require("rimraf");
var tsb = require("gulp-tsb");

var buildDirectory = "_build";

// create and keep compiler
var compilation = tsb.create({
    target: 'es5',
    module: 'commonjs',
    declaration: false
});

gulp.task("build", ["clean"], function() {
    gulp.src("src/app.ts")
        .pipe(compilation())
        .pipe(gulp.dest(buildDirectory));
});

gulp.task("clean", function(done) {
    rimraf(buildDirectory, function() {
        // rimraf deletes the directory asynchronously
        done();
    });
});

gulp.task("default", ["build"]);
