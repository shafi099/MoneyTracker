const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Transaction = require('./server/models/Transaction');
const app = express();
const PORT = 4000;

const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://shaikshafieluru:Shafi12345@shafi-financetrackerpro.niqdna8.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectToDatabase();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Shafi');
});

app.post('/transactions', async (req, res) => {
  const { amount, details, date } = req.body;

  if (!amount || !details) {
    return res.status(400).json({ message: 'Amount and details are required' });
  }

  const transaction = new Transaction({
    amount: amount,
    details: details,
    date: date,
  });

  try {
    await transaction.save();
    res.json(transaction);
  } catch (error) {
    console.error("Error saving transaction:", error);
    res.status(500).json({ message: 'Error saving transaction' });
  }
});

app.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find({}).sort({ createdAt: 1 });
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Error fetching transactions' });
  }
});

app.delete('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({ _id: req.params.id });
    res.json(transaction);
  } catch (error) {
    console.error('Error deleting transaction:', error);
    res.status(500).json({ message: 'Error deleting transaction' });
  }
});

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
