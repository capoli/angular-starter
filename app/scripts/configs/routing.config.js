(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/app/home");

                $stateProvider
                    .state('app', {
                        url: '/app',
                        templateUrl: '../../views/app.html',
                        controller: 'AppCtrl'
                    })
                    .state('app.home', {
                        url: '/home',
                        templateUrl: '../../views/home.html',
                        controller: 'HomeCtrl'
                    })
                    .state('app.about', {
                        url: '/about',
                        templateUrl: '../../views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .state('app.login', {
                        url: '/login',
                        templateUrl: '../../views/login.html',
                        controller: 'LoginCtrl'
                    })
                    .state('app.register', {
                        url: '/register',
                        templateUrl: '../../views/register.html',
                        controller: 'RegisterCtrl'
                    })
                    .state('app.user', {
                        url: '/user',
                        templateUrl: '../../views/user.html',
                        resolve: {
                            permission: function (AuthorizationService, Config) {
                                return AuthorizationService.permissionCheck([Config.roles.user]);
                            }
                        }
                    });
                //Example nesting
                /*.state('app.movie', {
                 abstract: true,
                 url: '/movie',
                 templateUrl: 'views/movie.html',
                 controller: 'MovieCtrl'
                 })
                 .state('app.movie.list', {
                 url: '/list',
                 templateUrl: 'views/movie.list.html',
                 controller: 'MovieListCtrl'
                 })
                 .state('app.movie.search', {
                 url: '/search/:title',
                 templateUrl: 'views/movie.search.html',
                 controller: 'MovieSearchCtrl'
                 })
                 .state('app.movie.detail', {
                 url: '/:id',
                 templateUrl: 'views/movie.detail.html',
                 controller: 'MovieDetailCtrl'
                 })*/
            }]);
})();