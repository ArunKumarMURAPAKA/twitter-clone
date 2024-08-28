const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes.js');
const tweetRoutes = require('./routes/tweetRoutes.js');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/api/users', authRoutes);
app.use('/api/tweets', tweetRoutes);

module.exports = app;
