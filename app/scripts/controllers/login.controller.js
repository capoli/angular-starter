(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('LoginCtrl', ['$scope', '$state', 'UserService',
            function ($scope, $state, UserService) {
                $scope.loginUser = {email: '', password: ''};

                $scope.login = function () {
                    UserService.login().then(function () {
                        $scope.alerts.push(
                            {type: 'success', msg: 'login success!'}
                        );
                        $scope.deleteLastMessageAfterDelay();
                        $state.go('app.home');
                    });
                };
            }]);
})();