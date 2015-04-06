Starter.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {



    var configProperties = {
        views: {
            maxCache: 5,
            forwardCache: true,
            transition: 'android'
        },

    /*    backButton: {
            icon: 'ion-chevron-left',
            text: '返回',
            previousTitleText: false
        },*/

        tabs: {
            style: 'striped',
            position: 'bottom'
        },
        templates: {
            // maxPrefetch: 0
        }
    };
    $ionicConfigProvider.setPlatformConfig('android', configProperties);





    var routerUrls = {
        // setup an abstract state for the tabs directive
        'app':{
            url: "/app",
            abstract: true,
            templateUrl: "templates/index/tabs.html",
            controller: 'AppCtrl'
        },
        'app.index': {
            url: "/index",
            views: {
                'index-tab': {
                    templateUrl: "templates/index/main.html",
                    controller: 'IndexCtrl'
                }
            }
        },
        'app.service': {
            url: "/service",
            views: {
                'service-tab': {
                    templateUrl: "templates/index/service.html",
                    controller: 'IndexServiceCtrl'
                }
            }
        },
        'app.subject': {
            url: "/subject",
            views: {
                'subject-tab': {
                    templateUrl: "templates/index/subject.html",
                    controller: 'SubjectListCtrl'
                }
            }
        },
        'tutorial': {
            url: '/tutorial',
            templateUrl: 'templates/help/tutorial.html',
            controller: 'TutorialCtrl'
        },
        'load': {
            url: '/',
            templateUrl: 'templates/help/load.html',
            controller: 'LoadCtrl'
        },
        'subjectdetail': {
            url: "/subjectdetail/:id",
            templateUrl: "templates/subject/detail.html",
            controller: 'SubjectDetailCtrl'
        },
        'profile': {
            url: "/profile",
            abstract: true,
            templateUrl: "templates/profile/menu.html"
        },
        'profile.my': {
            url: '/my',
            views: {
                'menuContent': {
                    templateUrl: 'templates/profile/main.html',
                    controller: 'ProfileMainCtrl'
                }
            }
        },
        'app.friend-detail': {
            url: '/friend/:friendId',
            views: {
                'menuContent': {
                    templateUrl: 'js/base/view/detail.html',
                    controller: 'FriendDetailCtrl'
                }
            }
        },
        'app.account': {
            url: '/account',
            views: {
                'menuContent': {
                    templateUrl: 'templates/example/refresh.html',
                    controller: 'AccountCtrl'
                }
            }
        }

    }
    var TrainRouters = {
        'train': {
            url: "/train",
            abstract: true,
            templateUrl: 'templates/train/tab.html'
        },
        'train.index': {
            url: '/index',
            views: {
                'index-train-tab': {
                    templateUrl: 'templates/train/index.html'
                    //  controller: 'TrainSearchCtrl'
                }
            }

        },
        'train.search': {
            url: '/search',
            views: {
                'query-train-tab': {
                    templateUrl: 'templates/train/query/search.html',
                    controller: 'TrainSearchCtrl'
                }
            }
        },
        'train.line': {
            url: '/line',
            views: {
                'query-train-tab': {
                    templateUrl: 'templates/train/query/line.html',
                    controller: 'LineCtrl'
                }
            }

        },
        'train.happy': {
            url: '/happy',
            views: {
                'happy-train-tab': {
                    templateUrl: 'templates/train/happy/main.html',
                    // controller: 'LineCtrl'
                }
            }

        },
        'train.travel': {
            url: '/travel',
            views: {
                'travel-train-tab': {
                    templateUrl: 'templates/train/travel/main.html',
                    //controller: 'LineCtrl'
                }
            }

        }

    }
    var WeiEarnRouters = {
        'nearby': {
            url: '/nearby',
            templateUrl: 'templates/weiearn/nearby.html',
            controller: 'NearbyCtrl'
        },
        'earnuserlist': {
            url: '/earnuserlist',
            templateUrl: 'templates/weiearn/userlist.html',
            controller: 'WeiEarnUserListCtrl'
        },
        'earnuserdetail': {
            url: '/earnuserdetail/:uid',
            templateUrl: 'templates/weiearn/userdetail.html',
            controller: 'WeiEarnUserDetailCtrl'
        },
        'earnservice': {
            url: '/earnservice',
            templateUrl: 'templates/weiearn/service.html',
            controller: 'WeiEarnServiceCtrl'
        },
        'chat': {
            url: '/chat',
            templateUrl: 'templates/weiearn/chat.html',
            controller: 'ChatCtrl'
        }

    }
    var PlanRouters = {
        'travel': {
            url: '/travel',
            templateUrl: 'templates/scence/search-form.html',
            controller: 'TravelCtrl'
        },
        'travellist': {
            url: '/travel/list',
            templateUrl: 'templates/scence/list.html',
            controller: 'TravelListCtrl'
        },
        'plandetail': {
            url: '/plan/detail/:planId',
            templateUrl: 'templates/plan/detail.html',
            controller: 'PlanDetailCtrl'
        },
        'planList': {
            url: '/plan/list',
            templateUrl: 'templates/plan/list.html',
            controller: 'PlanListCtrl'
        },
        'plandetailmap': {
            url: '/plan/map/:planId',
            templateUrl: 'templates/plan/detailMap.html',
            controller: 'PlanDetailMapCtrl'
        }

    }


    var __routers = angular.extend({},routerUrls,TrainRouters,WeiEarnRouters,PlanRouters);


    for(var stateName in __routers){
        $stateProvider.state(stateName,__routers[stateName]);
    }


    $stateProvider



        .state('login', {
            url: '/login',
            templateUrl: 'js/base/view/auth/login.html',
            controller: 'AuthCtrl'
        })


        .state('camera', {
            url: '/camera',
            templateUrl: 'templates/example/camera.html',
            controller: 'CameraCtrl'
        })
        //小工具
        .state('exam', {
            url: '/exam',
            templateUrl: 'templates/example/exam.html',
            controller: 'ExamCtrl'
        })
    //




        .state('app.swipecard', {
            url: '/swipecard',
            views: {
                'menuContent': {
                    templateUrl: 'templates/example/swipe-card.html',
                    controller: 'SwipeCardCtrl'
                }
            }
        })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

});