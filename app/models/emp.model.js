var mongoose=require('mongoose');
var empSchema=mongoose.Schema({
    ename:String,
    desg:String,
    sal:Number,
    dept:String
});
module.exports=mongoose.model('tblemp',empSchema);