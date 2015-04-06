/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var collection =mongodb.collection('store_logs');
//write function here
var userModel = {
    list: function(callback){

            // Locate all the entries using find
        collection.find().toArray(function(err, results) {
            callback(results);
        });
    }
};

module.exports = userModel;

