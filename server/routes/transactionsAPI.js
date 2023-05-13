const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.post('/transactions', async (req, res) => {
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
    console.error('Error saving transaction:', error);
    res.status(500).json({ message: 'Error saving transaction' });
  }
});

router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find({}).sort({ createdAt: 1 });
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Error fetching transactions' });
  }
});

router.delete('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({ _id: req.params.id });
    res.json(transaction);
  } catch (error) {
    console.error('Error deleting transaction:', error);
    res.status(500).json({ message: 'Error deleting transaction' });
  }
});

module.exports = router;
