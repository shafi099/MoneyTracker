import React, { useState, useEffect } from 'react';
import Topnav from './topnav';
import Form from './Form';
import Filter from './Filter';
import deleteicon from './deleteicon.png'
import './App.css';
// import TranxChart from './ChartComp';
import Feedback from './Feedback';

const HomeApp = () => {
    const [formData, setFormData] = useState({
        amount: '',
        details: '',
        date: ''
      });
    
      const [transactions, setTransactions] = useState([]);
      const [lowestDate, setLowestDate] = useState('');
      const [latestDate, setLatestDate] = useState('');
    
      useEffect(() => {
        fetchTransactionData();
      }, []);
    
      const [totalAmount, setTotalAmount] = useState(0);
    
      async function fetchTransactionData() {
        const response = await fetch('http://localhost:4000/transactions');

        const data = await response.json();
    
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setTransactions(sortedData);
    
        const cash = data.reduce((total, transaction) => total + transaction.amount, 0);
        setTotalAmount(cash);
    
       if (sortedData.length > 0) {
          const lowest = sortedData[sortedData.length - 1].date;
          const latest = sortedData[0].date;
    
          const lowestDate = new Date(lowest);
          const latestDate = new Date(latest);
    
          const monthOptions = { month: 'short' };
    
          setLowestDate(`${lowestDate.toLocaleString('default', monthOptions)} ${lowestDate.getFullYear()}`);
          setLatestDate(`${latestDate.toLocaleString('default', monthOptions)} ${latestDate.getFullYear()}`);
        }
       
      }
    
      const inputMng = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
     async function submitbtn(event) {
  event.preventDefault();
  const response = await fetch('http://localhost:4000/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  fetchTransactionData();
}

    
      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
      };
    
      const [dateorder, setdateorder] = useState('asec');
      const Datedesc = (value) => {
        if (value === 'asec') {
          const sortedDesc = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
          setTransactions(sortedDesc);
          setdateorder('desc');
        } else {
          const reversed = [...transactions].reverse();
          setTransactions(reversed);
          setdateorder('asec');
        }
      };
    
    
      const [amountorder, setamountorder] = useState('asec')
      // const Amountdesc = (value) => {
      //   if (value = 'asec') {
      //     let arr = [...transactions]
      //     for (let i = 0; i < arr.length; i++) {
      //       for (let j = i + 1; j < arr.length; j++) {
      //         if (arr[i].amount > arr[j].amount) {
      //           let temp = arr[i].amount;
      //           arr[i].amount = arr[j].amount;
      //           arr[j].amount = temp;
      //         }}}
      //     setTransactions(arr);
      //     setamountorder('desc');
      //   }
      //   else {
      //     setamountorder('asec');
      //     Datedesc();}}
      const Amountdesc = (value) => {
        if (value === 'asec') {
          const sortedAsc = [...transactions].sort((a, b) => a.amount - b.amount);
          setTransactions(sortedAsc);
          setamountorder('desc');
        } else {
          const sortedDesc = [...transactions].sort((a, b) => b.amount - a.amount);
          setTransactions(sortedDesc);
          setamountorder('asec');
        }
      };


      async function transactionDelete(id) {
        const confirmed = window.confirm("Are you sure you want to delete this transaction?");
        if (confirmed) {

            await fetch(`http://localhost:4000/transactions/${id}`, {
              method: 'DELETE',
            });
            fetchTransactionData();
        }
      }
    
    
  return (
    <>
    <Topnav lowestDate={lowestDate} totalAmount={totalAmount} latestDate={latestDate} />
    <Form submitbtn={submitbtn} inputMng={inputMng} amount={formData.amount} details={formData.details} date={formData.date} />
    {/* <TranxChart/> */}
    <Filter datefilter={() => Datedesc(dateorder)} amountfilter={() => Amountdesc(amountorder)} />
  
    <div className='datadisplay'>
    <span className="TranxHis">Transaction History</span>
      {transactions.map((transaction) => (
        <div key={transaction._id} className='datarow'>
          {/* <span></span> */}
          <span>{formatDate(transaction.date)}</span>
          <span>{transaction.details}</span>
          <span className='amount'>₹{transaction.amount}
            {/* <img src={edit} alt='editicon' /> */}
            <img src={deleteicon} alt='deleteicon' onClick={() => transactionDelete(transaction._id)} />
          </span>
        </div>
      ))}
    </div>
    <Feedback/>
  </>
  )
}

export default HomeApp