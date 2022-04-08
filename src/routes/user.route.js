const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");

router.get("/get_user", userController.getAllUsers);

router.post("/post_user", userController.postUser);

router.get("/get_user/:id", userController.getUserById);

router.delete("/delete_user/:id", userController.deleteUserById);

router.patch("/update_user/:id", userController.updateDataById);

module.exports = router;
