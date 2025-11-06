const express = require("express")
const router = express.Router();
const userController = require('../controllers/users');


router.get("/", userController.getUsers)
router.put("/:id",  userController.putUser)
router.delete("/:id",  userController.deleteUser)

module.exports =  router