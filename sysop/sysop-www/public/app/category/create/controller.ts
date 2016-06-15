/**
 * Created by Administrator on 6/14/2016.
 */

namespace sysop.category.create {
    type Param = sysopapi.category.create.IParam;
    type Result = sysopapi.category.create.IResult;

    class Controller {
        mdl = { name: "new name" };

        constructor(private $http: ng.IHttpService) {

        }

        submit(frm: ng.IFormController) {
            if (frm.$invalid) {
                return alert("form invalid");
            }

            
            var param: Param = {
                name : this.mdl.name
            };
            this.$http.post<Result>("/api/category", param)
                .success(r => {
                    console.log(this.mdl);
                    alert("success")
                })
                .error(e => {
                    alert("error")
                })

        }
    }

    Controller.$inject = ["$http"];

    angular
        .module('sysop.category')
        .controller("CtrlCategoryCreate", Controller)
}


;
