if (typeof (require) != 'undefined') {
	var loader = require('./loader.js').loader;
}

loader.executeModule('main',
'B',
function (B) {
	var host,
		socket;

	host = window.location.protocol.concat('//')
		.concat(window.location.hostname)
		.concat(':').concat(window.location.port);

});
