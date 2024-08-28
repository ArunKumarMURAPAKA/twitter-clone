const express = require('express');
const tweetController = require('../controllers/tweetController');
const authMiddleware = require('../utils/authMiddleWare');
const router = express.Router();

router.post('/', authMiddleware, tweetController.createTweet);
router.get('/:userId/timeline', tweetController.getUserTimeline);

module.exports = router;
