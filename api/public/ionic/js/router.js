Starter.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider

        // setup an abstract state for the tabs directive
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/index/tabs.html",
            controller: 'AppCtrl'
        })
        //首页
        .state('app.index', {
            url: "/index",
            views: {
                'index-tab': {
                    templateUrl: "templates/index/main.html",
                    controller: 'IndexCtrl'
                }
            }
        })
        .state('app.service', {
            url: "/service",
            views: {
                'service-tab': {
                    templateUrl: "templates/index/service.html",
                    controller: 'IndexServiceCtrl'
                }
            }
        })
        .state('app.subject', {
            url: "/subject",
            views: {
                'subject-tab': {
                    templateUrl: "templates/index/subject.html",
                    controller: 'SubjectListCtrl'
                }
            }
        })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





        //欢迎页
        .state('tutorial', {
            url: '/tutorial',
            templateUrl: 'templates/help/tutorial.html',
            controller: 'TutorialCtrl'
        })
        .state('load', {
            url: '/',
            templateUrl: 'templates/help/load.html',
            controller: 'LoadCtrl'
        })
        // Each tab has its own nav history stack:

////////////////===Subject/////////////////////////////////////////////////

        .state('subjectdetail', {
            url: "/subjectdetail/:id",
            templateUrl: "templates/subject/detail.html",
            controller: 'SubjectDetailCtrl'
        })








////////////////=/////////////////////////////////////////////////
        // setup an abstract state for the tabs directive
        .state('profile', {
            url: "/profile",
            abstract: true,
            templateUrl: "templates/profile/menu.html"
        })
        .state('profile.my', {
            url: '/my',
            views: {
                'menuContent': {
                    templateUrl: 'templates/profile/main.html',
                    controller: 'ProfileMainCtrl'
                }
            }
        })
        .state('app.friend-detail', {
            url: '/friend/:friendId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/user/detail.html',
                    controller: 'FriendDetailCtrl'
                }
            }
        })

        .state('app.account', {
            url: '/account',
            views: {
                'menuContent': {
                    templateUrl: 'templates/example/refresh.html',
                    controller: 'AccountCtrl'
                }
            }
        })
/*------------------------- Train -----------------------------------------*/
        .state('train', {
            url: "/train",
            abstract: true,
            templateUrl: 'templates/train/tab.html'
        })
        .state('train.index', {
            url: '/index',
            views: {
                'index-train-tab': {
                    templateUrl: 'templates/train/index.html'
                  //  controller: 'TrainSearchCtrl'
                }
            }

        })
        .state('train.search', {
            url: '/search',
            views: {
                'query-train-tab': {
                    templateUrl: 'templates/train/query/search.html',
                    controller: 'TrainSearchCtrl'
                }
            }
        })
        .state('train.line', {
            url: '/line',
            views: {
                'query-train-tab': {
                    templateUrl: 'templates/train/query/line.html',
                    controller: 'LineCtrl'
                }
            }

        })
        .state('train.happy', {
            url: '/happy',
            views: {
                'happy-train-tab': {
                    templateUrl: 'templates/train/happy/main.html',
                   // controller: 'LineCtrl'
                }
            }

        })
        .state('train.travel', {
            url: '/travel',
            views: {
                'travel-train-tab': {
                    templateUrl: 'templates/train/travel/main.html',
                    //controller: 'LineCtrl'
                }
            }

        })






/*------------------------- WeiEarn -----------------------------------------*/

        .state('nearby', {
            url: '/nearby',
            templateUrl: 'templates/weiearn/nearby.html',
            controller: 'NearbyCtrl'
        })
        .state('earnuserlist', {
            url: '/earnuserlist',
            templateUrl: 'templates/weiearn/userlist.html',
            controller: 'WeiEarnUserListCtrl'
        })
        .state('earnuserdetail', {
            url: '/earnuserdetail/:uid',
            templateUrl: 'templates/weiearn/userdetail.html',
            controller: 'WeiEarnUserDetailCtrl'
        })
        .state('earnservice', {
            url: '/earnservice',
            templateUrl: 'templates/weiearn/service.html',
            controller: 'WeiEarnServiceCtrl'
        })
        .state('chat', {
            url: '/chat',
            templateUrl: 'templates/weiearn/chat.html',
            controller: 'ChatCtrl'
        })




        /*------------------------- Plan -----------------------------------------*/
        .state('travel', {
            url: '/travel',
            templateUrl: 'templates/scence/search-form.html',
            controller: 'TravelCtrl'
        })
        .state('travellist', {
            url: '/travel/list',
            templateUrl: 'templates/scence/list.html',
            controller: 'TravelListCtrl'
        })
        .state('plandetail', {
            url: '/plan/detail/:planId',
            templateUrl: 'templates/plan/detail.html',
            controller: 'PlanDetailCtrl'
        })
        .state('planList', {
            url: '/plan/list',
            templateUrl: 'templates/plan/list.html',
            controller: 'PlanListCtrl'
        })
        .state('plandetailmap', {
            url: '/plan/map/:planId',
            templateUrl: 'templates/plan/detailMap.html',
            controller: 'PlanDetailMapCtrl'
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
        .state('login', {
            url: '/login',
            templateUrl: 'templates/user/auth/login.html',
            controller: 'AuthCtrl'
        })



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