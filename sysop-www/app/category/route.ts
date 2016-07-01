/**
 * Created by Administrator on 6/14/2016.
 */


angular.module('sysop.category', [])
    .config(['$stateProvider',
        function ($stateProvider: angular.ui.IStateProvider) {
            $stateProvider
                .state('category', {
                    url: "/category",
                    parent: "base-lay",
                    templateUrl: '/app/category/view.htm',
                    resolve: {
                        loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('/app/category/api.js');
                        }]
                    }
                })
                .state('category.list', {
                    url: "/list",
                    templateUrl: '/app/category/list/list.htm',
                    data: {
                        routeName: 'Ангилал'
                    },
                    resolve: {
                        loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('/app/category/list/controller.js');
                        }]
                    }
                })
                .state('category.create', {
                    url: "/create",
                    templateUrl: '/app/category/create/view.htm',
                    data: {
                        routeName: 'Нэмэх'
                    },
                    resolve: {
                        loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('/app/category/create/controller.js');
                        }]
                    }
                })
                .state('category.edit', {
                    url: "/edit/:id",
                    templateUrl: '/app/category/edit/view.htm',
                    resolve: {
                        loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('/app/category/edit/controller.js');
                        }]
                    }
                })
        }
    ])
    ;
