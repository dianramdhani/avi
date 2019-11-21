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

    _.$inject = ['$scope', 'FaceImageService', 'UtilService'];
    function _($scope, FaceImageService, UtilService) {
        const updateData = async () => {
            $scope.data = await FaceImageService.getAllResult().then(_ => _.data);
            $scope.$apply();
        };
        let $ctrl = this;
        $ctrl.$onInit = () => {
            updateData();
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

        $scope.upload = () => {
            UtilService.trLoadingProcess(async () => {
                $scope.result = await FaceImageService.faceCompare({ imageSource: $scope.imageSource, imageTarget: $scope.imageTarget });
                $scope.$apply();
                updateData();
            });
        };

        $scope.loadImg = (imgUrl) => {
            return FaceImageService.getImageDataUrl({ imgUrl });
        };
    }
})();