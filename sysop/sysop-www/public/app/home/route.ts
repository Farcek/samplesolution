angular.module('sysop.home', [])
    .config(['$stateProvider',
        function ($stateProvider:angular.ui.IStateProvider) {
            $stateProvider
                .state('home', {                    
                    url: "/home",
                    templateUrl: '/public/app/home/view.htm'
                });
        }
    ]) 
;
