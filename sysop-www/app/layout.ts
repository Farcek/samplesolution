/**
 * Created by Administrator on 6/14/2016.
 */

namespace sysop.layout {

    class MainController {
        items: any;
        total: number;
        isOpen: boolean; 

        constructor(private $http: ng.IHttpService) {
        }

        toggleMenu() {
            this.isOpen = !this.isOpen;
        }


    }

    MainController.$inject = ["$http"];


    angular
        .module('sysop')
        .controller("MainCtrl", MainController)
        ;
}
