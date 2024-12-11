const mongoose=require('mongoose')

const drinkSchema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    }
})

const drinks=mongoose.model("drinks",drinkSchema)

module.exports=drinks