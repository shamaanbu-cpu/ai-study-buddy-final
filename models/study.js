const mongoose = require('mongoose');
module.exports = mongoose.model('Study', new mongoose.Schema({
  userId: String,
  subject: String,
  question: String,
  answer: String,
  createdAt: {type:Date, default:Date.now}
}));
