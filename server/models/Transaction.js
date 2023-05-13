const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  details: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Transaction', transactionSchema);
