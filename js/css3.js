!function(e,i){"use strict";var s=e.document,t="stylefix",r=s.querySelector?s.documentMode:"XMLHttpRequest"in e?7:6;i.config({debug:!0,alias:{placeholder:r||!("placeholder"in s.createElement("input"))||+navigator.userAgent.replace(/.*(?:\bA\w+WebKit)\/?(\d+).*/i,"$1")<536?"placeholder":t,document:!r&&e.netscape?"prefixfree":"document",PIE:9>r?"PIE_IE678":11>r?"PIE_IE9":t,selectivizr:s.querySelector?t:"selectivizr",matchmedia:e.matchMedia?t:"matchmedia","es5-shim":[].filter?t:"es5-shim.min",mOxie:e.FileReader?t:"moxie.js",prefixfree:9>r?t:"prefixfree",supports:e.CSS?t:"supports",cssprops:11>r?"cssprops":t,posfixed:7>r?"posfixed":t,jquery:"jquery-1.11.2.min.js",cssunits:"cssunits",stylefix:t}}),define.cmd=!0}(window,seajs);