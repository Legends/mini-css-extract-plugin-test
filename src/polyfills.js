(function test() {

    var modernBrowser = (
        'fetch' in window &&
        'assign' in Object
    );

    if (!modernBrowser) {
        var scriptElement = document.createElement('script');
        scriptElement.async = false;
        scriptElement.src = '../node_modules/promise-polyfill/dist/polyfills.js';
        document.head.appendChild(scriptElement);
    }

})()

module.exports = {}