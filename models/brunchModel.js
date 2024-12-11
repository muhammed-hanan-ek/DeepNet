const mongoose=require('mongoose')

const brunchSchema=new mongoose.Schema({
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

const brunches=mongoose.model("brunches",brunchSchema)

module.exports=brunches