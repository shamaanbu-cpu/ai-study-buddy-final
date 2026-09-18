const express = require('express');
const router = express.Router();
const Study = require('../models/Study');
const auth = require('../middleware/auth');

router.post('/ask', auth, async (req,res) => {
  const {subject, question} = req.body;
  let answer = `AI Study Buddy Answer for ${subject}: "${question}" - Ithu simple ah explain pannina answer da! Real AI key add panna original AI answer varum.`;
  const study = new Study({userId:req.user, subject, question, answer});
  await study.save();
  res.json({question, answer});
});

router.get('/history', auth, async (req,res) => {
  const data = await Study.find({userId:req.user});
  res.json(data);
});

module.exports = router;
