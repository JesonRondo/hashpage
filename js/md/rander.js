define(function(require, exports, module) {
    var pages = {
        '#index': {'tpl': '../../tpl/index.html', 'e': 'e_index', 'nav': 0},
        '#video': {'tpl': '../../tpl/video.html', 'e': 'e_video', 'nav': 1}
    };

    var loadPage = function(tplPath, eventReg) {
        require.async(tplPath, function(tpl) {
            // load page
            $('#main').html(tpl);
            // init event
            if (eventReg !== undefined) {
                require.async(eventReg, function(e) {
                    e.init();
                });
            }
        });
    };
    
    var randerPage = function(hash) {
        if (hash === '') {
            location.hash = '#index';
            return;
        }

        if (pages[hash] !== undefined) {
            loadPage(pages[hash].tpl, pages[hash].e);
        }
    };

    exports.paint = function(hash) {
        randerPage(hash);
    };
});