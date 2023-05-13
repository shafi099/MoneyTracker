const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://shaikshafieluru:Shafi12345@shafi-financetrackerpro.niqdna8.mongodb.net/?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connect;
