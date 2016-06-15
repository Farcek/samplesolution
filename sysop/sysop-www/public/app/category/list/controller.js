var sysop;
(function (sysop) {
    var category;
    (function (category) {
        var list;
        (function (list) {
            var Controller = (function () {
                function Controller($http) {
                    this.$http = $http;
                    this.load();
                }
                Controller.prototype.load = function () {
                    var _this = this;
                    this.$http.get("/api/category")
                        .success(function (resp) {
                        _this.total = resp.total;
                        _this.items = resp.items;
                    })
                        .error(function (err) {
                        alert("error");
                        console.log(err);
                    });
                };
                return Controller;
            }());
            Controller.$inject = ["$http"];
            angular
                .module('sysop.category')
                .controller("CtrlCategoryList", Controller);
        })(list = category.list || (category.list = {}));
    })(category = sysop.category || (sysop.category = {}));
})(sysop || (sysop = {}));
