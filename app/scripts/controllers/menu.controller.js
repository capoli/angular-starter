(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('MenuCtrl', ['$scope',
            function ($scope) {
                $scope.menu = {
                    about: 'app.about',
                    home: 'app.home',
                    login: 'app.login',
                    register: 'app.register'
                };

                $scope.isCollapsed = true;

                $scope.collapseMenu = function () {
                    if(!$scope.isCollapsed) $scope.isCollapsed = true;
                }
            }]);
})();