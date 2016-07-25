angular.module('calendar-app')
  .directive('calendar', function () {
    return {
        restrict: 'A',
        templateUrl: '/js/directives/partials/calendar.tpl.html',
        scope: true,
        controllerAs: 'vm',
        bindToController: true,
        controller: ['$scope', function ($scope) {
            var days = Array.apply(null, Array(31)).map(function (_, i) {return i + 1;});

            var vm = this;

            vm.date = new Date();

            console.log(days);
            // -- api

            // -- main

        }]
    };
});