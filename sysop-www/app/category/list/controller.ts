/**
 * Created by Administrator on 6/14/2016.
 */

namespace sysop.category.list {

    type IParam = sysopapi.category.list.IParam;
    type IResult = sysopapi.category.list.IResult;
    type IDelParam = sysopapi.category.destroy.IParam;
    type IDelResult = sysopapi.category.destroy.IResult;


    class Controller {
        items: any;
        total: number;

        constructor(private $http: ng.IHttpService) {
            this.load();
        }

        load() {

            this.$http.get<IResult>("/api/category")
                .success(resp => {
                    this.total = resp.total;
                    this.items = resp.items;
                })
                .error(err => {
                    alert("error");
                    console.log(err);
                })

        }
        remove(item: IDelParam) {
            console.log(item);
            
            let response = confirm(item.name + " устгах уу?");
            let _this = this;

            if (response) {
                this.$http.delete<IDelResult>("/api/category/" + item.id)
                    .success(resp => {
                        _this.load()
                        alert(item.id + " id tai hereglegch ustgagdlaa");
                    })
                    .error(err => {
                        alert("error");
                        console.log("Error in delete operation");
                        console.log(err);
                    })
            }
        }
    }

    Controller.$inject = ["$http"];


    angular
        .module('sysop.category')
        .controller("CtrlCategoryList", Controller)
        ;
}
