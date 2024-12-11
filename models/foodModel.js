const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
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

const foods=mongoose.model("foods",foodSchema)

module.exports=foods