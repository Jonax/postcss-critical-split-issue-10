import gulp from "gulp"
import postcss from "gulp-postcss"
import rename from "gulp-rename"
import split from "postcss-critical-split"

const MODES = ["critical", "rest"];

const dirs = {
	src: "../src",
	dest: "../dest"
};

function CSS(splitMode)
{
	return gulp.src(`${dirs.src}/input.css`)
				.pipe(postcss([
					split({
						"output": splitMode
					})
				]))
			.pipe(rename(`${splitMode}.css`))
			.pipe(gulp.dest(`${dirs.dest}`));
}

function SpawnTasks()
{
	// Gulp tasks aren't necessary passed around, but registered individually.  
	// Registers a Gulp task for each split mode in use.  
	MODES.forEach(v => {
		gulp.task(v, () => CSS(v))
	})

	// Returns the task keys (i.e. the split modes in use)
	return MODES;
}

gulp.task("default", gulp.parallel(SpawnTasks()));