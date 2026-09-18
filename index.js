const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoMemoryServer } = require('mongodb-memory-server');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

let mongod;
async function startServer() {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
  console.log("MongoDB Connected (Memory Server)");

  app.get('/', (req,res) => res.send('AI Study Buddy Running...'));
  app.use('/api/auth', require('./routes/authRoutes'));
  app.use('/api/study', require('./routes/studyRoutes'));

  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
}
startServer();
