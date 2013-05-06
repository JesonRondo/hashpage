define(function(require, exports, module) {
    var $ = require('zepto');
    
    var randerPage = function(hash) {
        switch(hash) {
            case '#index':
                var tpl = require.async('../../tpl/index.html', function(tpl) {
                    $('body').append(tpl);
                });
                break;
            case '#video':
                var tpl = require.async('../../tpl/video.html', function(tpl) {
                    $('body').append(tpl);
                });
                break;
            default:
                break;
        }
    };

    var clearRander = function() {
        $('#page').remove();
    };

    exports.paint = function(hash) {
        clearRander();
        randerPage(hash);
    };
});