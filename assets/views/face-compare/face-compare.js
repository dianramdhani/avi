(function () {
    'use strict';

    // Usage:
    // Face compare view.

    window.app
        .component('faceCompare', {
            template: require('./face-compare.html'),
            controller: _
        });

    _.$inject = ['$scope', 'FaceImageService'];
    function _($scope, FaceImageService) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.upload = async () => {
            const res = await FaceImageService.faceCompare({ imageSource: $scope.imageSource, imageTarget: $scope.imageTarget });
            console.log(res);
        };
    }
})();