const tweetService = require('../services/tweetService');

exports.createTweet = async (req, res) => {
  try {
    const { text } = req.body;
    const tweet = await tweetService.createTweet(req.user.userId, text);
    res.status(201).json(tweet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserTimeline = async (req, res) => {
  try {
    const { userId } = req.params;
    const { limit = 10, cursor } = req.query;
    const tweets = await tweetService.getUserTimeline(userId, parseInt(limit), cursor);
    res.json(tweets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
