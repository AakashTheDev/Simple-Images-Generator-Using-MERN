const express = require('express');
const router = express.Router();
const imageController = require('../Controllers/ImageControllers');
console.log("Image Routes");
router.post('/', imageController.generateImage);

module.exports = router;
