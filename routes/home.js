const express = require('express')
const HomeControllers = require('../controllers/home')

const router = express.Router()

router.get("/",HomeControllers.GetHome);

module.exports = router