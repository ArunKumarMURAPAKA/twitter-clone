const Tweet = require('../models/Tweet');

exports.createTweet = async (userId, text) => {
  const tweet = new Tweet({ userId, text });
  await tweet.save();
  return tweet;
};

exports.getUserTimeline = async (userId, limit, cursor) => {
  const query = { userId };
  if (cursor) {
    query._id = { $lt: cursor };
  }
  return Tweet.find(query).sort({ _id: -1 }).limit(limit);
};
