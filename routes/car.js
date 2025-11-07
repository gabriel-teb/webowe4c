const express = require("express")
const router = express.Router();
const {getCars, getSingleCar,putCar,deleteCar,postCar}= require('../controllers/cars');


router.get("/", getCars)
router.get("/:id", getSingleCar)
router.put("/:id",  putCar)
router.delete("/:id",  deleteCar)
router.post("/", postCar)

module.exports =  router