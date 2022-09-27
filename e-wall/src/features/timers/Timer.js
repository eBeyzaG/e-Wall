import React, { useEffect, useState } from 'react'
import { selectTimer } from './timersSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Timer = () => {

    const navigate = useNavigate()

    const timer = useSelector(selectTimer)

    const [hours, setHours] = useState(timer.hours)
    const [minutes, setMinutes] = useState(timer.minutes)
    const [seconds, setSeconds] = useState(timer.seconds)
    
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }
            if( seconds === 0){
                if(minutes === 0){
                    if(hours === 0){
                        clearInterval(myInterval)
                        navigate('/result')
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