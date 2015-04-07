/* 
 * Routes.
 */








//define routes
exports.routes = [
    { route: '/', controller: 'index', action: 'index' },
    { route: '/login', controller: 'index', action: 'login' },




    //api,weiboapi
    { route: '/api', controller: 'api', action: 'cmd', type: 'POST' },
    { route: '/weibo', controller: 'weibo', action: 'cmd', type: 'POST' },





    /*


     {route: '/', controller: 'index', action:'index'},

     {route: '/socket', controller: 'index', action:'socket'},





     {route: '/user2', controller: 'user', action:'index'},

     //api,weiboapi
     {route: '/api', controller: 'api', action:'cmd',type:'POST'},
     {route: '/weibo', controller: 'weibo', action:'cmd',type:'POST'},

     {route: '/train/analysis', controller: 'train', action:'analysis'},
     {route: '/train/baidu', controller: 'train', action:'baidu'},
     {route: '/station/address', controller: 'train', action:'stationAddress'},
     {route: '/station/addressing', controller: 'train', action:'stationAnalysisAddress'},






     * */


];

//Define common function namess
exports.commonRouteFunctions = [];  // if use ['helper'],then add a 
                                    //function named helper in helpers/routes.js
                                    //with (req,res, next);
