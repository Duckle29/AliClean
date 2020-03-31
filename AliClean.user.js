// ==UserScript==
// @name        AliClean
// @description Clean aliexpress item URL
// @license     BSD 3-Clause
// @author      Duckle29
// @namespace   https://github.com/Duckle29
// @include     /^https?:\/\/([a-zA-Z]{2,3}\.)?aliexpress\.com\/(item|store\/product)\/.*/
// @run-at      document-start
// @icon        https://avatars3.githubusercontent.com/u/2756925?v=3&s=200
// @homepageURL https://github.com/Duckle29/AliClean
// @downloadURL https://raw.githubusercontent.com/Duckle29/AliClean/master/AliClean.user.js
// @updateURL   https://raw.githubusercontent.com/Duckle29/AliClean/master/AliClean.user.js
// @version     1.4
// @history     1.4 Made it work on all 2character sub-domains
// @history     1.3 Changed to group based regex
// @history     1.2 Removed @connect metadata, as they're not necessary for updates (I think)
// @history     1.1 Fixed @include directive and double slash in URL
// ==/UserScript==

(function() {
    'use strict';
    var groups = document.URL.match(/^(https?:\/\/(?:[a-zA-Z]{2,3}\.)?aliexpress.com\/(?:item|store\/product))(\/[0-9_]+[.]html(?=$|[?]))/)
    
    if (groups.length === 3 && groups[1]+groups[2] != document.URL)
    {
      history.replaceState(null, '', groups[1]+groups[2]);
    }
})();
