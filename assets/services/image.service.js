(function () {
    'use strict';

    window.app
        .service('ImageService', ImageService);

    ImageService.$inject = ['$http', 'CONFIG'];
    function ImageService($http, CONFIG) {
        this.compareImagesAndDownload = compareImagesAndDownload;

        const url = CONFIG.API;

        function compareImagesAndDownload() { }
    }
})();