angular.module('sysop', [
    "ui.router", "oc.lazyLoad",
    "sysop.modules"
])
// html5mode
    .config(['$locationProvider',
        function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            //$locationProvider.hashPrefix('!');

        }
    ])
    //base lay
    // .config(['$stateProvider',
    //     function ($stateProvider:angular.ui.IStateProvider) {
    //         $stateProvider
    //             .state('base-lay', {
    //                 templateUrl: '/public/app/lay.htm'
    //             })
    //         ;
    //     }
    // ])
    // route init
    .config(['$urlRouterProvider',
        function ($urlRouterProvider:{otherwise:any}) {
            $urlRouterProvider.otherwise('/home');
        }
    ])
    //date transform
    .config(['$httpProvider', function ($httpProvider:any) {
        var regexIso8601 = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;

        function convertDateStringsToDates(input) {
            // Ignore things that aren't objects.
            if (typeof input !== "object") return input;

            for (var key in input) {
                if (!input.hasOwnProperty(key)) continue;

                var value = input[key];
                var match;
                if (typeof value === "string" && (match = value.match(regexIso8601))) {
                    input[key] = new Date(match[0]);
                } else if (typeof value === "object") {
                    convertDateStringsToDates(value);
                }
            }
        }

        $httpProvider.defaults.transformResponse.push(function (responseData) {
            convertDateStringsToDates(responseData);
            return responseData;
        });
    }])
    // app config
    .factory('$appConfig', function () {
        return {};
    })
    .directive('appConfig', ['$appConfig',
        function ($appConfig) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if ('appConfig' in attrs) {
                        var conf = angular.fromJson(attrs.appConfig);
                        angular.merge($appConfig, conf);

                    }
                }
            };
        }
    ]);


