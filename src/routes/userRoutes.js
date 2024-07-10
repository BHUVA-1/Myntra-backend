const express = require('express');
const { registerUser, loginUser, getUserWardrobe } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:userId/wardrobe', getUserWardrobe);

module.exports = router;
