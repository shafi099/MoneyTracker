<<<<<<< HEAD
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Transaction = require('./models/Transaction.js');
const User = require('./models/User.js');
const app = express();
const PORT = 4000;

const mongoose = require('mongoose');
const MONGO_DB = "mongodb+srv://shaikshafieluru:Shafi12345@shafi-financetrackerpro.niqdna8.mongodb.net/?retryWrites=true&w=majority"
const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://shaikshafieluru:Shafi12345@shafi-financetrackerpro.niqdna8.mongodb.net/?retryWrites=true&w=majority");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
=======
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
>>>>>>> db876bc39bbee4e20593570bc506e950255b4817
  }
}
