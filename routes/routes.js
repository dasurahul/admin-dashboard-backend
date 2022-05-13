const express = require("express");
const controller = require("../controller/controller");
const verify = require("./auth-verify");

const router = express.Router();

router.post("/signup", controller.signup);
router.post("/signin", controller.signin);
router.get("/get-all", verify, controller.getAllUsers);

module.exports = router;
