var fs = require('fs'),
    through = require('through2'),
    gutil = require('gulp-util'),
    File = gutil.File;

module.exports = function (opt){

    function concat(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            return callback(new gutil.PluginError('gulp-concat-script', 'doesn\'t support Streams'));
        }

        var contents = file.contents.toString(),
            lines = contents.split('\n'),
            newLines = [],
            parsed = false;

        lines.forEach(function (line) {
            var m = line.match(/src="(.*.js)"/) || line.match(/^ *'(.*)',?$/);
            if (!m || !fs.existsSync(m[1])) {
                return;
            }
            newLines.push(fs.readFileSync(m[1]).toString());
            parsed = true;
        });
        if (parsed) {
            file = new File({
                cwd: file.cwd,
                base: file.base,
                path: file.path,
                contents: new Buffer(newLines.join('\n'))
            });
        }
        return callback(null, file);
    }

    return through.obj(concat);
};