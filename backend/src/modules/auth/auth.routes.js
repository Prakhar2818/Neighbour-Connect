const router = require("express").Router();
const c = require("./auth.controller");

router.post("/register", c.register);
router.post("/login", c.login);
router.post("/forgot-password", c.forgotPassword);
router.post("/reset-password", c.resetPassword);

module.exports = router;
