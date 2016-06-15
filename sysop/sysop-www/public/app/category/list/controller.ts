/**
 * Created by Administrator on 6/14/2016.
 */

namespace sysop.category.list {

    type Param = sysopapi.category.list.IParam;
    type Result = sysopapi.category.list.IResult;

    class Controller {
        items: any;
        total: number;

        constructor(private $http: ng.IHttpService) {
            this.load();
        }

        load() {

            this.$http.get<Result>("/api/category")
                .success(resp => {
                    this.total = resp.total;
                    this.items = resp.items;
                })
                .error(err => {
                    alert("error");
                    console.log(err);
                })

        }
    }

    Controller.$inject = ["$http"];


    angular
        .module('sysop.category')
        .controller("CtrlCategoryList", Controller)
        ;
}
