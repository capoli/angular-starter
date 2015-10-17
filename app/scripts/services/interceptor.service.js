(function () {
    'use strict';

    angular.module('app.services')
        .factory('InterceptorService', ['$q', '$location', 'ConfigService',
            function ($q, $location, ConfigService) {
                return {
                    request: function (config) {
                        return config || $q.when(config);
                    },

                    requestError: function (rejection) {
                        return $q.reject(rejection);
                    },

                    response: function (response) {
                        return response || $q.when(response);
                    },

                    responseError: function (rejection) {
                        $location.path(ConfigService.routeForUnauthorizedAccess);

                        return $q.reject(rejection);
                    }
                }
            }]);
})();