/**
 * Created by Administrator on 6/14/2016.
 */


angular.module('sysop.category', [])
    .config(['$stateProvider',
        function ($stateProvider:angular.ui.IStateProvider) {
            $stateProvider
                .state('category', {
                    url: "/category",
                    templateUrl: '/public/app/category/view.htm',
                    resolve: {
                        loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('/public/app/category/api.js');
                        }]
                    }
                })
                .state('category.list', {
                    url: "/list",
                    templateUrl: '/public/app/category/list/list.htm',
                    resolve: {
                        loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('/public/app/category/list/controller.js');
                        }]
                    }
                })
                .state('category.create', {
                    url: "/create",
                    templateUrl: '/public/app/category/create/view.htm',
                    resolve: {
                        loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('/public/app/category/create/controller.js');
                        }]
                    }
                })
        }
    ])
;
