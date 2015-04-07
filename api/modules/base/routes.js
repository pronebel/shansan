exports.routes = [

    {route: '/editor', controller: 'editor', action:'index',type:'POST'},
    {route: '/editor', controller: 'editor', action:'index',type:'GET'},




    {route: '/auth', controller: 'auth', action:'login'},
    {route: '/auth/login', controller: 'auth', action:'extLogin'},
    {route: '/callback', controller: 'auth', action:'callback'},
];
