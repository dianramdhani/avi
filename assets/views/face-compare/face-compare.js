require('./face-compare.css');

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
        $ctrl.$onInit = () => {
            $scope.$watch('imageSource', () => {
                if ($scope.imageSource) {
                    $scope._imageSource = window.URL.createObjectURL($scope.imageSource[0]);
                }
            });
            $scope.$watch('imageTarget', () => {
                if ($scope.imageTarget) {
                    $scope._imageTarget = window.URL.createObjectURL($scope.imageTarget[0]);
                }
            });
        };

        $scope.upload = async () => {
            $scope.result = await FaceImageService.faceCompare({ imageSource: $scope.imageSource, imageTarget: $scope.imageTarget });
            $scope.$apply();
        };
    }
})();