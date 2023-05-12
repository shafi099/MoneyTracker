import React from 'react'

const topnav = (props) => {
  return (<>
    <div className='topnav'>
      <div className='title'>₹CoinTracker</div>
    <div className='ExpenseBox'>
        <div className='ExpenseBoxChilds'>
          <span className='ExpenseText'>From</span>
          <span className='ExpenseValue'>{props.lowestDate}</span>
        </div>
        <div className='ExpenseBoxChilds'>
        <span className='ExpenseText'>Your Expenses</span>
          <span className='ExpenseValue'>₹{props.totalAmount}</span>
          </div>
          <div className='ExpenseBoxChilds'>
          <span className='ExpenseText'>To</span>
          <span className='ExpenseValue'>{props.latestDate}</span>
        </div>
        </div>
        </div>
 </> )
}

export default topnav