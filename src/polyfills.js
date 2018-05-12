module.exports = (function test() {

    var modernBrowser = (
        'fetch' in window &&
        'assign' in Object
    );

    if (true) { // !modernBrowser
        console.log("Adding promise polyfill to browser !");
        var scriptElement = document.createElement('script');
        scriptElement.async = false;
        scriptElement.src = '../node_modules/promise-polyfill/dist/polyfill.js';
        document.head.appendChild(scriptElement);
    }
 return {};
})()

