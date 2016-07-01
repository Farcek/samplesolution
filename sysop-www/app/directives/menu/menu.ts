angular
    .module('sysop')
    .directive('appMenu', [
        function ():ng.IDirective {
            return {
                restrict: 'A',
                templateUrl: '/app/directives/menu/menu.htm',
                link: function name(scope:any, elem, attrs:any) {
                    console.log(attrs);
                    if (attrs.navStack) {
                        scope.style = "nav-stacked";
                    }

                }
            }
        }
    ])

