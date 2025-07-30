const express = require("express");
const viewController = require("../controllers/viewController");
const router = express.Router();

router.get("/", viewController.home);
router.get("/privacy", viewController.privacy);
router.get("/toad", viewController.toad);

module.exports = router;
