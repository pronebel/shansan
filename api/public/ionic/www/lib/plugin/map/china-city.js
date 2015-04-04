window.rnd =0;

angular.module('china-city', [])
    .directive('chinaCity', [
        '$ionicTemplateLoader',
        '$ionicBackdrop',
        '$q',
        '$timeout',
        '$rootScope',
        '$document', '$http', '$compile',
        function ($ionicTemplateLoader, $ionicBackdrop, $q, $timeout, $rootScope, $document, $http, $compile) {


            function linkFn (scope1, element1, attrs1, ngModel1){

                var scope = scope1;
                var element = element1;
                var attrs = attrs1;
                var ngModel = ngModel1;


                return function(){
                    window.rnd++;


                    scope.rnd = window.rnd;
                    ngModel.rnd = window.rnd;

                    var POPUP_TPL = [
                            '<div class="china-city-container" data-id="'+window.rnd+'">',
                        '<div class="bar bar-header bar-dark ">',
                        ' <h1 class="title">选择城市</h1>',

                        '<button class="button button-clear">',
                        '取消',
                        '</button>',
                        '</div>',
                        '<ion-content class="has-header has-header">',
                        '<div class="list china-city-list" ><div ng-repeat="Province in CityList">',
                        '<div class="item item-divider">{{Province.n}}</div>',
                        '<div class="item">',
                        ' <a  ng-click="selectLocation(City,Province.n)" ng-repeat="City in Province.cities"  >',
                        '{{City.n}}',
                        '</a>',
                        '</div>',
                        '</div></div>',
                        '</ion-content>',
                        '</div>'
                    ].join('');




                    scope.CityList = CityJSON;
                    var $popElement = angular.element('<div>').html(POPUP_TPL).contents();

                    scope.selectLocation = function (location, province) {

                        location.formatAddress = province + location.n;
                        ngModel.$setViewValue(location);
                        ngModel.$render();
                        $popElement.css('display', 'none');
                        $ionicBackdrop.release();
                    };
                    ngModel.$render = function () {


                        if (!ngModel.$viewValue) {
                            element.val('');
                        } else {
                            element.val(ngModel.$viewValue.n || '');
                        }
                    };
                    angular.element($document[0].body).append($popElement);

                    $compile($popElement)(scope);





                    $popElement.find('button').bind('click', function (e) {

                        $ionicBackdrop.release();
                        $popElement.css('display', 'none');
                    });
                    var onClick = function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        $ionicBackdrop.retain();

                        $popElement.css('display', 'block');

                    };

                    element.bind('click', onClick);
                    element.bind('touchend', onClick);



                }
            }



            return {
                require: 'ngModel',
                restrict: 'E',
                scope:true,

                template: '<input type="text" readonly="readonly" class="china-city" autocomplete="off">',
                replace: true,
                link: function (scope, element, attrs, ngModel) {
                    (new linkFn(scope, element, attrs, ngModel))();
                }
            };
        }
    ]);