const express = require("express");
const router = express.Router();
const { getContent } = require('../controllers/account.controllers');

router.route("/grab").post(getContent);
// Get all accounts
router.route("/getAll").get(getAllAccounts);
// Update account
router.route("/update/:id").put(updateAccount);
// Delete account
router.route("/delete/:id").delete(deleteAccount);


module.exports = router;