const express = require("express");

const router = express.Router();
const registerUser = require("./userController");

router.route("/register").post(registerUser);
router.route("/product").get(registerUser);

module.exports = router;
