
module.exports = {

    test:function(req,res){

        system.loadPluginView(res,'test/test', {
            title: "伞module测试"
        },'san');
    },

    api:function(req, res){

        var cmd = req.param("cmd");
        var json = req.param("json");
        var cmdArr = cmd.split("_");

        var __mod = system.getPluginModel(cmdArr[0],'san');
        var __params = JSON.parse(decodeURIComponent(json));

        __mod[cmdArr[1]](__params, function(retJSON){
            res.json(retJSON);
        });

    }
};