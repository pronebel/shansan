Starter_Controller


.controller('TutorialCtrl', function ($scope, $rootScope, $state, $timeout, $ionicViewService,localStorageService) {

    // "��������"��ťEvent
    $scope.gotoMain = function () {
//            $ionicViewService.clearHistory();
        // Ĭ�Ͻ�����ҳ
        $state.go('auth');
    }

    $scope.slideHasChanged = function (index) {
        console.log(index);

    };
})
.controller('LoadCtrl', function ($scope, $rootScope, $state, $timeout, $ionicViewService,localStorageService) {

    var loginData = localStorageService.get("Profile");
    if(loginData&&loginData.wb_auth){
        $state.go("app.index")
    }else{
        $state.go("login")
    }

})