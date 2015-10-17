(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('LoginCtrl', ['$scope', '$state',
            function ($scope, $state) {
                $scope.loginUser = {email: '', password: ''};

                $scope.login = function () {
                    console.log($scope.loginUser);
                    $scope.alerts.push(
                        {type:'success', msg:'login success!'}
                    );
                    $scope.deleteLastMessageAfterDelay();
                    $state.go('app.home');
                };
            }]);
})();