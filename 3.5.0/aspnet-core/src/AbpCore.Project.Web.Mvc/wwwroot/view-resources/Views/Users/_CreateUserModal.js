(function($){
var _organizationAppService = abp.services.app.organization;
    _organizationAppService.getAll({
        maxResultCount: 9999,
        skipCount: 0,
        sorting: 'code',
        order: 'desc'
    }).done(function (data) {
        $('#selectTree').selectTree({
            data: data.items
        });
    });
})(jQuery);