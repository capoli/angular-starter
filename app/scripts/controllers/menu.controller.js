(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('MenuCtrl', ['$scope', '$state', 'UserService',
            function ($scope, $state, UserService) {
                $scope.menu = {
                    about: 'app.about',
                    home: 'app.home',
                    login: 'app.login',
                    register: 'app.register',
                    logout: 'app.home'
                };

                $scope.isCollapsed = true;

                $scope.collapseMenu = function () {
                    if (!$scope.isCollapsed) $scope.isCollapsed = true;
                };

                $scope.user = UserService.user;

                $scope.logout = function () {
                    UserService.logout().then(function () {
                        $scope.collapseMenu();
                        $scope.alerts.push(
                            {type: 'success', msg: 'logout success!'}
                        );
                        $scope.deleteLastMessageAfterDelay();
                        $state.go('app.home');
                    });
                }
            }]);
})();