(function () {
    'use strict';

    window.app
        .service('ImageService', ImageService);

    ImageService.$inject = ['$http', 'CONFIG'];
    function ImageService($http, CONFIG) {
        this.compareImagesAndDownload = compareImagesAndDownload;

        const url = CONFIG.API;

        function compareImagesAndDownload({ imgStd, imgCheck }) {
            let fd = new FormData();
            fd.append('file1', imgStd[0]);
            fd.append('file2', imgCheck[0]);
            return $http.post(`${url}/api/compareImagesAndDownload`, fd, {
                transformResponse: angular.identity,
                responseType: 'arraybuffer',
                headers: { 'Content-Type': undefined }
            }).then(res => {
                let blob = new Blob([res.data], { type: 'image/jpeg' });
                return (window.URL || window.webkitURL).createObjectURL(blob);
            });
        }
    }
})();