
module.exports = {
    cmd:function(req, res){

        var cmd = req.param("cmd");
        var json = req.param("json");

        var cmdArr = cmd.split("_");



        var __mod = system.getModel(cmdArr[0]);
        var __params = JSON.parse(decodeURIComponent(json));
        console.log(__mod);

        console.log(__params);


        console.log(__mod[cmdArr[1]]);


        __mod[cmdArr[1]](__params, function(retJSON){
            res.json(retJSON);
        });

    }
};