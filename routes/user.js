const express = require("express")
const router = express.Router();
const userController = require('../controllers/users');


router.get("/", userController.getUsers)
router.get("/:id", userController.getSingleUser)
router.put("/:id",  userController.editUser)
router.post("/", userController.createUser)
router.delete("/:id",  userController.deleteUser)

module.exports =  router