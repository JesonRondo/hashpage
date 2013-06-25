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
		'rander': 'md/rander.js',

        'e_index': 'page/e_index.js',
        'e_video': 'page/e_video.js'
	}
});