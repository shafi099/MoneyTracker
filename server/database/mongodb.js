const mongoose = require('mongoose');

async function connect() {
  try {
    const username = process.env.MONGO_DB_USERNAME;
    const password = process.env.MONGO_DB_PASSWORD;
    const url = process.env.MONGO_DB_URL;
    await mongoose.connect(`mongodb+srv://${username}:${password}@${url}/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


module.exports = connect;
