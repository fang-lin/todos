var componentsTestsContext = require.context('./components', true, /test$/);
var reducersTestsContext = require.context('./reducers', true, /test$/);

componentsTestsContext.keys().forEach(function (test) {
    try {
        componentsTestsContext(test);
    } catch (err) {
        console.error('[ERROR] WITH SPEC FILE: ', test);
        console.error(err);
    }
});

reducersTestsContext.keys().forEach(function (test) {
    try {
        reducersTestsContext(test);
    } catch (err) {
        console.error('[ERROR] WITH SPEC FILE: ', test);
        console.error(err);
    }
});