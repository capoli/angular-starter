(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('AppCtrl', ['$scope', '$state', '$interval', '$rootScope', 'ConfigService',
            function ($scope, $state, $interval, $rootScope, ConfigService) {
                $scope.alerts = [];

                $scope.closeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

                $scope.deleteLastMessageAfterDelay = function () {
                    $interval(
                        function () {
                            $scope.alerts.splice($scope.alerts.length - 1, 1);
                        },
                        ConfigService.deleteMessageDelay,
                        1
                    );
                };

                /*$rootScope.$on('$stateChangeStart', function (event, nextState, currentState) {
                    console.log('nextState:');
                    console.log(nextState);
                    if (!isAuthenticated(nextState)) {
                        console.debug('Could not change route! Not authenticated!');
                        $rootScope.$broadcast('$stateChangeError');
                        event.preventDefault();
                        $state.go('login');
                    }
                });*/
            }]);
})();