namespace sysop.category.edit {

    type IParam = sysopapi.category.edit.IParam;
    type IResult = sysopapi.category.edit.IResult;

    class Controller {
        item: IParam
        constructor(private $http: ng.IHttpService, private $stateParams: {id: number}, private $location: ng.ILocationService ) {
            this.load();
        }
        load() {
          console.log(this.$stateParams);

            this.$http.get<IResult>("/api/category/"+this.$stateParams.id)
                .success(resp => {
                  console.log(resp);
                    this.item = resp.item[0];
                })
                .error(err => {
                    alert("error");
                    console.log(err);
                })

        }

        update(form: ng.IFormController) {
          console.log('clicked');
          console.log(this.item.id);
          var param: IParam = {
              name: this.item.name
          };
          this.$http.put<IResult>("/api/category/"+this.item.id, param)
              .success(r => {
                  alert("success")
                  this.$location.path('/category/list');
              })
              .error(e => {
                  alert("error")
              })

        }
    }

    Controller.$inject = ["$http", "$stateParams","$location"];


    angular
        .module('sysop.category')
        .controller("CtrlCategoryEdit", Controller)
        ;
}
