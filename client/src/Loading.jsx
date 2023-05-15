import React from 'react'
import './loading.css'
const Loading = () => {
    return (
        < div className='load'>
            <div class="loader">
                <div class="wrapper">
                    <div class="circle"></div>
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                    <div class="line-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading