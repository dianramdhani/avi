(function () {
    'use strict';

    window.app
        .service('FaceImageService', FaceImageService);

    FaceImageService.$inject = ['$http', 'CONFIG'];
    function FaceImageService($http, CONFIG) {
        this.faceCompare = faceCompare;

        const url = CONFIG.API2;

        function faceCompare({ imageSource, imageTarget }) {
            const fd = new FormData();
            fd.append('imageSource', imageSource[0]);
            fd.append('imageTarget', imageTarget[0]);
            return $http.post(`${url}/faceCompared`, fd, {
                transformResponse: angular.identity,
                headers: { 'Content-Type': undefined }
            }).then(res => JSON.parse(res.data));
        }
    }
})();