// ==UserScript==
// @name        AliClean
// @version     1.0
// @description Clean aliexpress item URL
// @license     BSD 3-Clause
// @author      Duckle29
// @namespace   https://github.com/Duckle29
// @include     /^https?://(www\.)?aliexpress\.com/((item|store/product)/.*/
// @run-at      document-start
// @connect     githubusercontent.com
// @connect     raw.githubusercontent.com
// @icon        https://avatars3.githubusercontent.com/u/2756925?v=3&s=200
// @homepageURL https://github.com/Duckle29/AliClean
// @downloadURL https://raw.githubusercontent.com/Duckle29/AliClean/master/AliClean.user.js
// @updateURL   https://raw.githubusercontent.com/Duckle29/AliClean/master/AliClean.user.js
// ==/UserScript==

(function() {
    'use strict';

    var p1 = document.URL.match(/https?:\/\/(www\.)?aliexpress.com\/(?:item|store\/product)\//g);
    var p2 = document.URL.match(/\/[0-9_]+[.]html(?=$|[?])/g);
    if (p1 && p2 && p1+p2 != document.URL) history.replaceState(null, '', p1+p2);
})();
