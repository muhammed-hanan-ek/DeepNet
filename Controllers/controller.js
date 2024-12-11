const brunches = require("../models/brunchModel");
const drinks = require("../models/drinksModel");
const foods = require("../models/foodModel");

// get food
exports.getAllFoodsController=async(req,res)=>{
    console.log("inside getAllFoodsController");
    try{
        const allFoods= await foods.find();
        res.status(200).json(allFoods)
    }catch(err){
        console.log(err);
        
    }
}

// get drinks
exports.getAllDrinksController=async(req,res)=>{
    console.log("inside getAllDrinksController");
    try{
        const allDrinks= await drinks.find();
        res.status(200).json(allDrinks)
    }catch(err){
        console.log(err);
        
    }
}

// get brunches
exports.getAllBrunchesController=async(req,res)=>{
    console.log("inside getAllBrunchesController");
    try{
        const allBrunches= await brunches.find();
        res.status(200).json(allBrunches)
    }catch(err){
        console.log(err);
        
    }
}