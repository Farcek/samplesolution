angular.module('ngui', [
    "ngui-core",
    "ngui-notify",
    "ngui-alert",
    "ngui-form",
    "ngui-syspanel"
])
    .config(['$nguiConfigProvider',
        function ($nguiConfigProvider) {
            $nguiConfigProvider.setBaseTemplateUrl('/bower_components/ngui/tpl-bootstrap');
        }
    ])
    .config(['$nguiFormConfigProvider',
        function ($nguiFormConfigProvider) {
            $nguiFormConfigProvider
                .put("required","Хоосон байна")
        }
    ])
    .config(['$logProvider',
        function ($logProvider) {
            $logProvider.debugEnabled(true);
        }
    ]);
