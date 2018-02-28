var stackMapper = require('stack-mapper');
var fs = require('fs');

var err_msg = [{
	"msg": "ReferenceError: d is not defined @ Object.2../alloy-lever.js (http://127.0.0.1/AlloyLever/public/dist/js/build.js:308:9) @ s (http://127.0.0.1/AlloyLever/public/dist/js/build.js:1:265) @ e (http://127.0.0.1/AlloyLever/public/dist/js/build.js:1:436) @ http://127.0.0.1/AlloyLever/public/dist/js/build.js:1:465",
	"filename": "http://127.0.0.1/AlloyLever/public/dist/js/build.js",
	"line": 308,
	"column": 9
}];

var map = JSON.parse(fs.readFileSync('./public/dist/js/build.js.map', 'utf8'));

var sm = stackMapper(map);
var msg = sm.map(err_msg);

console.log(msg);
