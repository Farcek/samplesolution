angular.module('myApp.home', [])
    .config(['$stateProvider',
        function ($stateProvider:angular.ui.IStateProvider) {
            $stateProvider
                .state('home', {
                    url: "/home",
                    parent: "base-lay",
                    templateUrl: '/app/home/view.htm'
                });
        }
    ])
;
