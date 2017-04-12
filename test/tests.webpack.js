var testsContext = require.context('./components', true, /test$/);
var file = window.__karma__.config.file;
var path = require('path');

if (file) {
    // run a single file
    testsContext.keys().forEach(function (test) {
        if (path.normalize(test) === path.normalize(file)) {
            try {
                testsContext(test);
            } catch (err) {
                console.error('[ERROR] WITH SPEC FILE: ', test);
                console.error(err);
            }
        }
    });
} else {
    testsContext.keys().forEach(function (test) {
        try {
            testsContext(test);
        } catch (err) {
            console.error('[ERROR] WITH SPEC FILE: ', test);
            console.error(err);
        }
    });
}