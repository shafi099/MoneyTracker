// import connect from './database/mongodb.js'
const connect = require('./database/mongodb.js')
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Transaction = require('./models/Transaction.js');
const User = require('./models/User.js');
const TransactionRouters = require('./routes/transactionsAPI.js');
const app = express();
const PORT = 4000;

const mongoose = require('mongoose');
async function connectToDatabase(){
  await connect();
}


connectToDatabase();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Shafi');
});

app.use('/',TransactionRouters);



app.use(express.static(path.join(__dirname, '')))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
