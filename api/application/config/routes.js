/* 
 * Routes.
 */








//define routes
exports.routes = [
    { route: '/', controller: 'index', action: 'index' },

    //subject
    { route: '/subject/edit', controller: 'subject', action: 'edit' },
    { route: '/subject/list', controller: 'subject', action: 'list' },

    //api,weiboapi
    { route: '/api', controller: 'api', action: 'cmd', type: 'POST' },
    { route: '/weibo', controller: 'weibo', action: 'cmd', type: 'POST' },

];

//Define common function namess
exports.commonRouteFunctions = [];  // if use ['helper'],then add a 
                                    //function named helper in helpers/routes.js
                                    //with (req,res, next);
