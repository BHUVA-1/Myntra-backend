const express = require('express');
const { addToWardrobe, getWardrobeItem } = require('../controllers/wardrobeController');
const router = express.Router();

router.post('/', addToWardrobe);
router.get('/:wardrobeItemId', getWardrobeItem);

module.exports = router;
