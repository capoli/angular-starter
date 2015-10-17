(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('AppCtrl', ['$scope', '$state', '$interval', '$rootScope', 'Config',
            function ($scope, $state, $interval, $rootScope, Config) {
                $scope.alerts = [];

                $scope.closeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

                $scope.deleteLastMessageAfterDelay = function () {
                    $interval(
                        function () {
                            $scope.alerts.splice($scope.alerts.length - 1, 1);
                        },
                        Config.deleteMessageDelay,
                        1
                    );
                };
            }]);
})();