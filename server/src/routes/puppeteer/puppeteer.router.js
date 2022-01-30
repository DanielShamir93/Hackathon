const express = require("express");
const router = express.Router();
const { grabContent } = require('../controllers/puppeteer.controllers');

router.route("/grab").post(grabContent);


module.exports = router;