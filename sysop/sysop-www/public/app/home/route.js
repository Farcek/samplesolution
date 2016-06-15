angular.module('sysop.home', [])
    .config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('home', {
            url: "/home",
            templateUrl: '/public/app/home/view.htm'
        });
    }
]);
