const express = require("express");
const router= express.Router();
const authControllers = require("../Controllers/auth-controller");

router.route("/").get(authControllers.home);
router.route("/register1").post(authControllers.register);


module.exports = router;