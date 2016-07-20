angular
    .module('myApp.modules', [

        //sysop modules
        "myApp.home",//"sysop.category"

    ])
    // route init
    .config(['$urlRouterProvider',
        function ($urlRouterProvider:{otherwise:any}) {
            $urlRouterProvider.otherwise('/home');
        }
    ])
    //base lay
    .config(['$stateProvider',
        function ($stateProvider:angular.ui.IStateProvider) {
            $stateProvider
                .state('base-lay', {
                    templateUrl: '/app/layout.htm'
                })
            ;
        }
    ])

// .config(['$stateProvider',
//     function ($stateProvider:angular.ui.IStateProvider) {
//         $stateProvider
//             .state('time', {
//                 abstract: true,
//                 parent: 'base-lay',
//                 url: '/time',
//                 template: '<div ui-view></div>'
//             })
//         ;
//     }
// ])