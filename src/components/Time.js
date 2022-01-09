import React, { useState, useEffect } from 'react'

const initialState = new Date().toLocaleTimeString()

function Time() {
    

    const [time, setState] = useState(initialState)
    
    useEffect(() => {
        let intervals = setInterval(() => {
           return time
        })
        return () => {
            clearInterval(intervals)
        }
    }, [time])
    
    
    return (
        <div>
            <h2 className='Time'>
                <span>{time}</span>
            </h2>
        </div>
    )
}

export default Time
