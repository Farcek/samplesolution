var sysop;
(function (sysop) {
    var category;
    (function (category) {
        var create;
        (function (create) {
            var Controller = (function () {
                function Controller($http) {
                    this.$http = $http;
                    this.mdl = { name: "new name" };
                }
                Controller.prototype.submit = function (frm) {
                    var _this = this;
                    if (frm.$invalid) {
                        return alert("form invalid");
                    }
                    var param = {
                        name: this.mdl.name
                    };
                    this.$http.post("/api/category", param)
                        .success(function (r) {
                        console.log(_this.mdl);
                        alert("success");
                    })
                        .error(function (e) {
                        alert("error");
                    });
                };
                return Controller;
            }());
            Controller.$inject = ["$http"];
            angular
                .module('sysop.category')
                .controller("CtrlCategoryCreate", Controller);
        })(create = category.create || (category.create = {}));
    })(category = sysop.category || (sysop.category = {}));
})(sysop || (sysop = {}));
;
