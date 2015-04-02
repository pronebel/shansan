var iweibo = require('iweibo');
iweibo.set({
    appkey: '1539652173',
    appsecret: 'a4b2b1feaf3784900c7938e68edc534f'
});
var weibo = new iweibo.Weibo();


var weiboController = {
    cmd:function(req, res){

        var cmd = req.param("cmd");
        var json = req.param("json");

        var __params = JSON.parse(decodeURIComponent(json));

        weibo.api(cmd, __params).done(function(err, result) {
            var result = JSON.parse(result);
            res.json(result);
        });
    }

}

module.exports = weiboController;