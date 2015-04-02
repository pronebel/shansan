
//index function
var indexController = {
    list:function(req, res){
        var data = {
            title: "专题列表"
        }
        system.loadView(res,'subject/list', data);
    },
    edit:function(req,res){
        var data = {
            title: "Sleek.js"
        }





        system.loadView(res,'subject/form', data);
    }
}

module.exports = indexController;