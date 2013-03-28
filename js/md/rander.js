define(function(require, exports, module) {
    var $ = require('zepto');

    var randerPage = {
        '#index': function() {
            var tpl = require.async('../../tpl/index.html', function(tpl) {
                $('body').append(tpl);
            });
        },
        '#video': function() {
            var tpl = require.async('../../tpl/video.html', function(tpl) {
                $('body').append(tpl);
            });
        }
    };

    var clearRander = function() {
        $('#page').remove();
    };

    exports.paint = function(hash) {
        if (randerPage[hash] !== undefined) {
            clearRander();
            randerPage[hash]();
        } else { // not exist, point to index
            location.hash = '#index';
        }
    };
});