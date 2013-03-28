seajs.config({
	plugins: ['shim', 'text'],
	shim: {
		'zepto': {
			src: 'lib/zepto.min.js',
			exports: 'Zepto'
		}
	},
	alias: {
		'router': 'md/router.js',
		'rander': 'md/rander.js'
	}
});