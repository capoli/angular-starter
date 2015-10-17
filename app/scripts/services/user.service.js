(function () {
    'use strict';

    angular.module('app.services')
        .factory('UserService', ['Restangular',
            function (Restangular) {
                //simple restangular method
                return Restangular.service('users');
        }]);
})();