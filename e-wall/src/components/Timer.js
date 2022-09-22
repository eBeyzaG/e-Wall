import React, { useEffect, useState } from 'react'
import '../App.css';

const Timer = () => {

    const [hours, setHours] = useState(1)
    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(0)
    
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }
            if( seconds === 0){
                if(minutes === 0){
                    if(hours === 0){
                        clearInterval(myInterval)
                    }else{
                        setHours(hours - 1)
                        setMinutes(59)
                        setSeconds(59)
                    }
                }else{
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }
        }, 1000)
        return () => {clearInterval(myInterval)}
    })

  return (
    <div className='container timer'>
        <h1>{hours >  9 ? hours : "0" + hours}:{minutes > 9 ? minutes : "0"+ minutes}:{seconds > 9 ? seconds : "0" + seconds}</h1>
    </div>
  )
}

export default Timer