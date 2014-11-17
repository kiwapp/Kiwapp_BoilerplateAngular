'use strict';
/*@ngInject*/
module.exports = function (appInstanceDataApi) {

    function loadAppInstanceData() {
        console.log("[ENTER] loadAppInstanceData");
        return appInstanceDataApi.load();
    }
    return {
        load : loadAppInstanceData
    };
}
