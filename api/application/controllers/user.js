
/*

 */

//index function
var indexController = {
    index:function(req, res){
        var data = {
            title: "用户中心"
        }
        //load index.html from home directory
       // system.loadView(res,'home/user/user', data);

        var user = system.getPluginModel("user","comment");
        user.testData(function(resl){
            var data = {
                title: "Comment Plugin",
                data:resl
            }
            system.loadView(res,'home/user/user', data);

        })




    }
}

module.exports = indexController;