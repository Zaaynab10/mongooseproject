const mongoose=require('mongoose')
var personSchema= new mongoose.Schema(
    {
        name:{
            type:String,
           required:true
        },
        age:Number,
        favoriteFoods:[String],
    }
)

var PersonModel = mongoose.model('persons',personSchema)
module.exports=PersonModel