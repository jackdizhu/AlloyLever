var stackMapper = require('stack-mapper');
var fs = require('fs');

var err_msg = [{
	"msg": "ReferenceError: d is not defined @ Object.3../alloy-lever.js (http://127.0.0.1/AlloyLever/public/dist/js/build.js:321:9) @ s (http://127.0.0.1/AlloyLever/public/dist/js/build.js:1:265) @ e (http://127.0.0.1/AlloyLever/public/dist/js/build.js:1:436) @ http://127.0.0.1/AlloyLever/public/dist/js/build.js:1:465",
	"filename": "http://127.0.0.1/AlloyLever/public/dist/js/build.js",
	"line": 321,
	"column": 9
}];

var map = JSON.parse(fs.readFileSync('./public/dist/js/build.js.map', 'utf8'));

var sm = stackMapper(map);
var msg = sm.map(err_msg);
for (let i = 0; i < err_msg.length; i++) {
	err_msg[i].msg = err_msg[i].msg.split('@')[0]
}

// 写文件
fs.writeFileSync('./msg/msg.js', '\n' + JSON.stringify(err_msg) + '\n');
