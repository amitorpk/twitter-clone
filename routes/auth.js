const express = require("express");

const router = express.Router();

const authControllers = require("../controllers/auth");
const { route } = require("./home");

router.post("/singup", authControllers.signup);
router.get("/", (req, res, next) => {
  res.json("auth");
});

module.exports = router;
