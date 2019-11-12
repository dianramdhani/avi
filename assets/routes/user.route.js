(function () {
    'use strict';

    window.app
        .config(UserRoute);

    UserRoute.$inject = ['$stateProvider'];

    function UserRoute($stateProvider) {
        [
            { name: 'user.qualityVerification', url: 'quality-verification', component: 'qualityVerification' },
            { name: 'user.faceCompare', url: 'face-compare', component: 'faceCompare' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();