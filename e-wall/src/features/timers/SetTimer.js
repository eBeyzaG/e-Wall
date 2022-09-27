import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Navigate} from 'react-router-dom'
import { timerSet } from './timersSlice'

const SetTimer = () => {

    const dispatch = useDispatch()
    const [timerSetCompleted, setTimerSetCompleted] = useState(false)

    const [time, setTime] = useState({
        hours: '',
        minutes: '',
        seconds: ''
    })
    const {hours, minutes, seconds} = time

    const onChange = e => setTime({...time, [e.target.name] : e.target.value})

    const onSubmit = e => {
        e.preventDefault()

       
        dispatch(timerSet(hours, minutes, seconds))
        setTimerSetCompleted(true)
    }

    if(timerSetCompleted){
        return <Navigate to='/addTodo' />
    }

    
  return (
    <div className='setTimer'>
            <h2>I WILL STUDY FOR...</h2>
            <br></br>
            <form onSubmit={e => onSubmit(e)}>
                <div className='input-group' >
                    <input
                        className='form-control timer-input'
                        type='number'
                        placeholder='Hour(s)'
                        onChange={e => onChange(e)}
                        value={hours}
                        name='hours'
                    /><span class="input-group-addon"> </span>
                      <input
                        className='form-control timer-input'
                        type='number'
                        placeholder='Minute(s)'
                        onChange={e => onChange(e)}
                        value={minutes}
                        name='minutes'
                    /><span class="input-group-addon"> </span> <input
                    className='form-control timer-input'
                    type='number'
                    placeholder='Second(s)'
                    onChange={e => onChange(e)}
                    value={seconds}
                    name='seconds'
                />
                </div>
                
                <br></br>
                <div>
                <button type='submit'>Set Timer</button>
                </div>
            </form>
    </div>
  )
}

export default SetTimer