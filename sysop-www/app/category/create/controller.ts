/**
 * Created by Administrator on 6/14/2016.
 */

namespace sysop.category.create {
    type IParam = sysopapi.category.create.IParam;
    type IResult = sysopapi.category.create.IResult;

    class Controller {
        mdl = { name: "" };
        $alert : any;

        constructor(private $http: ng.IHttpService, private $nguiNotify, private $nguiAlert) {
            this.$alert = $nguiAlert();
        }

        submit(frm: ng.IFormController) {
            if (frm.$invalid) {
                return this.$alert.warning("form invalid");                
            }
            
            var param: IParam = {
                name : this.mdl.name
            };

            this.$http.post<IResult>("/api/category", param)
                .success(r => {
                    this.mdl.name = "";
                    this.$nguiNotify.success("Амжилттай хадгаллаа.");
                })
                .error(e => {
                    alert("error")
                })

        }
    }

    Controller.$inject = ["$http", "$nguiNotify", "$nguiAlert"];

    angular
        .module('sysop.category')
        .controller("CtrlCategoryCreate", Controller)
}


;
