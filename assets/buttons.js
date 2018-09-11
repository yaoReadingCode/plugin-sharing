require(['gitbook', 'jquery'], function (gitbook, $) {
    var SITES = {
        'cjj-gitbook-rebuild': {
            'label': '更新gitbook',
            'icon': 'fa fa-wrench',
            'onClick': function (e) {
                e.preventDefault();
                // "/yanfayibu/server-loancore/system-design-docs/sprint_design_%E8%BF%AD%E4%BB%A3%E6%94%B9%E5%8A%A8%E8%AE%BE%E8%AE%A1/api_recall_API%E7%94%A8%E6%88%B7%E5%8F%AC%E5%9B%9E/api_recall_API%E7%94%A8%E6%88%B7%E5%8F%AC%E5%9B%9E.html"
                var pathname = window.location.pathname;
                var splits = pathname.split('/');
                if (splits.length >= 4) {
                    // 现在是三层结构
                    var join = splits.splice(1, 3).join('/');
                    console.log(join);
                    window.open('http://172.0.12.143:5823/' + join);
                }
            }
        }
    };


    gitbook.events.bind('start', function (e, config) {


        // Direct actions to share
        $.each(SITES, function (sideId, site) {

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: site.onClick
            });
        });
    });
});
