(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('RegisterCtrl', ['$scope', '$state',
            function ($scope, $state) {
                $scope.registerUser = {username: '', email: '', password: '', gender: 'male', dateOfBirth: null};

                $scope.isMatchingPassword = false;

                $scope.checkPasswordsMatching = function () {
                    $scope.isMatchingPassword = (!($scope.registerUser.passwordConfirm === $scope.registerUser.password));
                };

                $scope.register = function () {
                    console.log($scope.registerUser);
                    $scope.alerts.push(
                        {type:'success', msg:'register success!'}
                    );
                    $scope.deleteLastMessageAfterDelay();
                    $state.go('app.home');
                };

                $scope.open = function($event) {
                    $scope.status.opened = true;
                };

                $scope.format = 'dd/MM/yyyy';

                $scope.maxDate = new Date();

                $scope.status = {
                    opened: false
                };
            }]);
})();