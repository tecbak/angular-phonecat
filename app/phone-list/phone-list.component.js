'use strict';


angular.module('phoneList').component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';
        $http.get('phones/phones.json').then(function (response) {
            self.phones = response.data;
        });
        // this.phones = [
        //     {
        //         name: 'Nexus',
        //         snippet: 'An android smartphone',
        //         age: 1
        //     }, {
        //         name: 'iPhone 7',
        //         snippet: 'Apple smartphone',
        //         age: 2
        //     }, {
        //         name: 'Xiaomi Redmi Note 3 Pro',
        //         snippet: 'Smartpone from China',
        //         age: 3
        //     }
        // ];
        // this.orderProp = 'age';
    }
});
