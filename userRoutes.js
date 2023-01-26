const express = require("express");

const router = express.Router();
const registerUser = require("./userController");

router.route("/api/v1/register").post(registerUser);
router.route("/api/v1/product").get(registerUser);

module.exports = router;
