const express= require('express')
const { getAllFoodsController, getAllDrinksController, getAllBrunchesController } = require('../Controllers/controller')

const router=new express.Router()

router.get('/all-foods',getAllFoodsController)

router.get('/all-drinks',getAllDrinksController)

router.get('/all-brunches',getAllBrunchesController)

module.exports=router