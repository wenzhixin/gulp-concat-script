# gulp-concat-script

Parses js files, finds `document.write('<script src="*.js"></script>')` directive and includes these files.

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save-dev gulp-concat-script`

## Usage

```javascript
var gulp = require('gulp'),
    concatScript = require('gulp-concat-script');

gulp.task("scripts", function() {
	gulp.src("js/config.js")
		.pipe(concatScript())
		.pipe(gulp.dest("dist/js/"));
}); 
```

`config.js:`
```javascript
document.write('<script src="libs/jquery.js"></script>');
document.write('<script src="libs/bootstrap.js"></script>');
document.write('<script src="js/app.js"></script>');
```

## Know issues

1. Cannot process minified files
2. Cannot process urls

## License

[The MIT Lincense](https://github.com/wenzhixin/gulp-concat-script/blob/master/LICENSE)
