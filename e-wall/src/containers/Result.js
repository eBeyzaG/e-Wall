import React, { useState } from 'react'
import html2canvas from 'html2canvas'


import { useSelector } from 'react-redux'
import { selectTimer } from '../features/timers/timersSlice'
import { selectAllTodos } from '../features/todos/todosSlice'
import { useNavigate } from 'react-router-dom'


const Result = () => {

    const printRef = React.useRef()
    const todos = useSelector(selectAllTodos)
    const timer = useSelector(selectTimer)
    const navigate = useNavigate()

    const onDownload = async () => {

        const content = printRef.current
        const canvas = await html2canvas(content)

        const data = canvas.toDataURL('image/jpg')
        const link = document.createElement('a')

        const time = new Date()

        if (typeof link.download === 'string') {
            link.href = data
            link.download = time.toLocaleString() +'.jpg'

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } else {
            window.open(data)
        }

    }

    const doneTodos = todos.map(todo => {
        if (todo.done) {
            return (
                <a key={todo.id} href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div className=" w-100 justify-content-between">
                        <h5 className="mb-1"> {todo.title}</h5>

                    </div>
                    <p class="mb-1">{todo.content}</p>
                </a>

            )
        }
    })

    const unDoneTodos = todos.map(todo => {
        if (!todo.done) {
            return (
                <a key={todo.id} href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                <div className=" w-100 justify-content-between">
                    <h5 className="mb-1"> {todo.title}</h5>
                </div>
                <p class="mb-1">{todo.content}</p>
            </a>
            )
        }
    })


    return (
        <div >
            
            
            <div  style={{ width: '60%' }} className='setTimer' ref={printRef}>
                <h2>STUDY RESULTS</h2>
            <br></br>
                <h5>I STUDIED FOR {timer.hours} HOUR(S) {timer.minutes} MINUTE(S) {timer.seconds} SECOND(S)</h5>
                <br></br>
                <h5>I MANAGED TO FINISH...</h5>

                <ul className="list-group">
                    {doneTodos}
                </ul>
                <br></br>
                <h5>I STILL HAVE TO FINISH...</h5>
                <ul className="list-group">
                    {unDoneTodos}
                </ul>

            </div>
            <br></br>
            <div  style={{ width: '20%' }} className='setTimer'>
            <button onClick={onDownload}>Download as Image</button>
            <br></br>
            <button onClick={e => { navigate('/setTimer')}}>Start Again</button>
            </div>
            <br></br>
        </div>

    )
}

export default Result