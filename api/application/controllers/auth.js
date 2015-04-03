var iweibo = require('iweibo');
iweibo.set({
    appkey: '1539652173',
    appsecret: 'a4b2b1feaf3784900c7938e68edc534f'
});
var weibo = new iweibo.Weibo();


var  backURL = 'http://127.0.0.1:8008/callback';


module.exports = {


    /**
     * 注册
     * @param data:{
     *  email:xxx,
     *  pwd:xxx
     * }
     */
    signup:function(req,res){
        var mem = system.getModel("member");

        mem.signup(data,function(resp){
            res.end(JSON.stringify(resp));
        });


    },


    login: function(req, res) {
        var data = {}
        data.loginURL = weibo.getAuthorizeURL(backURL);
        system.loadView(res,'auth/auth', data);
    },
    extLogin:function(req,res){


        var email = req.param("email");

        req.session.email = email;


        return res.redirect(weibo.getAuthorizeURL(backURL)) ;

    },


    getUserInfo:function(data){

        weibo.api('users/show', data).done(function(err, result) {

            var userMod = system.getModel("member");
            userMod.insertWeiboProfile(JSON.parse(result));
        });
    },

    callback: function(req, res) {


        var code = req.query.code;



        weibo.getAccessToken('code', {
            code: code,
            redirect_uri: backURL
        }).done(function(err, data) {

            data = JSON.parse(data);
            data.refresh_token = data.refresh_token || '';

            weibo.api('users/show', {
                access_token:data.access_token,
                uid:data.uid
            }).done(function(err, result) {

                var userMod = system.getModel("member");

                var profile = JSON.parse(result);


                data.email =    req.session.email;

                var paramsData = {
                    email:req.session.email,
                    wb_profile:profile,
                    wb_auth:data
                };

                userMod.insertWeiboUserProfile(paramsData, function(number){
                    console.log(number);
                    system.loadView(res,'auth/callback', data);
                    sleekio.sockets.emit("token",paramsData);

                });

            });




        }).fail(function(err, data) {
            console.log(err);
            console.log(data);

        });

    }



};