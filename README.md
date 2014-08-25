gulp-concat-script
==============

Parses js files, finds `document.write('<script src='*.js'></script>')` directive and includes these files.

USAGE
-----
```javascript
var gulp = require('gulp'),
    concatScript = require('gulp-concat-script');

gulp.task("scripts", function() {
	gulp.src("js/config.js")
		.pipe(concatScript())
		.pipe(gulp.dest("dist/js/"));
}); 
```

config.js:
```javascript
document.write('<script src="libs/jquery.js"></script>');
document.write('<script src="libs/bootstrap.js"></script>');
document.write('<script src="js/app.js"></script>');
```

KNOWN ISSUES
------------
1. Cannot process minified files
2. Cannot process urls