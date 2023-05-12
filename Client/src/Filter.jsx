import React from 'react'
import arrows from './arrows.png'

const Filter = (props) => {
    return (
        <div className="filteroptions">
            <span>Order By</span>
            <span className="filterbtnportion">
                <button onClick={props.datefilter} className="filterbtn">Date<img src={arrows} alt='arrowsicon' /></button>
                <button onClick={props.amountfilter} className="filterbtn">Amount <img src={arrows} alt='arrowsicon' /></button>
            </span>
        </div>
    )
}

export default Filter