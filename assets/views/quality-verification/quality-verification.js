(function () {
    'use strict';

    // Usage:
    // Quality verification view.

    window.app
        .component('qualityVerification', {
            template: require('./quality-verification.html'),
            controller: _
        });

    _.$inject = ['$scope', 'ImageService'];
    function _($scope, ImageService) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.upload = async () => {
            $scope._imgStd = window.URL.createObjectURL($scope.imgStd[0]);
            $scope._imgCheck = window.URL.createObjectURL($scope.imgCheck[0]);
            $scope._imgRes = await ImageService.compareImagesAndDownload({ imgStd: $scope.imgStd, imgCheck: $scope.imgCheck });
            $scope.$apply();
        };
    }
})();