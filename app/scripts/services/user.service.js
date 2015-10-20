(function () {
    'use strict';

    angular.module('app.services')
        .factory('UserService', ['Restangular',
            function (Restangular) {
                //simple restangular method
                //Restangular.service('users')
                return {
                    user: {
                        isLoggedIn: false
                    },
                    login: function() {
                        this.user.isLoggedIn = true;
                    }
                };
        }]);
})();