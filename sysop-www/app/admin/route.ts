angular.module('sysop.admin', [])
    .config(['$stateProvider',
        function ($stateProvider:angular.ui.IStateProvider) {
            $stateProvider
                .state('admin', {
                    url: "/admin",
                    templateUrl: '/public/app/admin/view.htm'
                });
        }
    ])
;
