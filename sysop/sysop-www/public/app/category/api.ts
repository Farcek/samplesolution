/**
 * Created by Administrator on 6/14/2016.
 */

namespace sysop.category {

    type Param = sysopapi.category.list.IParam;
    type Result = sysopapi.category.list.IResult;

    export class ApiCategory {


        constructor(private $http: ng.IHttpService) {            
            return this;
        }

        list(param: Param): ng.IHttpPromise<Result> {
            return this.$http.get<Result>('/api/category', {
                params: param
            })
                ;
        }

        create(param: Param): ng.IHttpPromise<Result> {
            return this.$http.get<Result>('/api/category', {
                params: param
            })
                ;
        }
    }
    ApiCategory.$inject = ["$http"];

    angular
        .module('sysop.category')
        .service("ApiCategory", ApiCategory)
}