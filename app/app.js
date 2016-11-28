'use strict';

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones = [
        {
            name: 'Nexus',
            snippet: 'An android smartphone'
        },
        {
            name: 'iPhone 7',
            snippet: 'Apple smartphone'
        }
    ];
});
