(function () {
    'use strict';

    // Usage:
    // Quality verification view.

    window.app
        .component('qualityVerification', {
            template: require('./quality-verification.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();