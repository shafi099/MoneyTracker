import React from 'react'

const Form = (props) => {
  return (
    <div>
    <span className='FormText'>Add New Transaction Details</span>
    <form onSubmit={props.submitbtn} className='transactioninputportion'>
      <input type="number" name='amount' onChange={props.inputMng} placeholder="Enter Transaction Amount" value={props.amount} className='transactioninput'/>
      <input type="text" name='details' onChange={props.inputMng} placeholder="Type Transaction Details" value={props.details} className='transactioninput' />
      <input type="date" name='date' onChange={props.inputMng} value={props.date} className='transactiondate'/>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Form