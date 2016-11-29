'use strict';

angular.module('phoneList').component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
        this.phones = [
            {
                name: 'Nexus',
                snippet: 'An android smartphone'
            },
            {
                name: 'iPhone 7',
                snippet: 'Apple smartphone'
            }
        ];
    }
});
