var sysop;
(function (sysop) {
    var category;
    (function (category) {
        var ApiCategory = (function () {
            function ApiCategory($http) {
                this.$http = $http;
                return this;
            }
            ApiCategory.prototype.list = function (param) {
                return this.$http.get('/api/category', {
                    params: param
                });
            };
            ApiCategory.prototype.create = function (param) {
                return this.$http.get('/api/category', {
                    params: param
                });
            };
            return ApiCategory;
        }());
        category.ApiCategory = ApiCategory;
        ApiCategory.$inject = ["$http"];
        angular
            .module('sysop.category')
            .service("ApiCategory", ApiCategory);
    })(category = sysop.category || (sysop.category = {}));
})(sysop || (sysop = {}));
