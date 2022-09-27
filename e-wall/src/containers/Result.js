import React, { useState } from 'react'
import html2canvas from 'html2canvas'

import { useSelector } from 'react-redux'
import { selectTimer } from '../features/timers/timersSlice'
import { selectAllTodos } from '../features/todos/todosSlice'


const Result = () => {

    const printRef = React.useRef()
    const todos = useSelector(selectAllTodos)
    const timer = useSelector(selectTimer)
    
    
    const onDownload = async () => {

        const content = printRef.current
        const canvas = await html2canvas(content)

        const data = canvas.toDataURL('image/jpg')
        const link = document.createElement('a')

        if (typeof link.download === 'string'){
            link.href = data
            link.download = 'result.jpg'

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }else {
            window.open(data)
        }

    }

    const doneTodos = todos.map(todo => {
        if(todo.done){
            return (
                <li key={todo.id}>
                    {todo.title} {todo.content}
                </li>
            )
        }
    })

    const unDoneTodos = todos.map(todo => {
        if(!todo.done){
            return (
                <li key={todo.id}>
                    {todo.title} {todo.content}
                </li>
            )
        }
    })


    return (
        <div>
            <h2>Study Results</h2>
            <button onClick={onDownload}>Download as Image</button>
            <div ref={printRef}>
                <h5>I studied for {timer.hours} hours {timer.minutes} minutes {timer.seconds} seconds</h5>

                <h5>I managed to finish:</h5>
                <br></br>
                <ul>
                    {doneTodos}
                </ul>
                <br></br>
                <h5>I still have to finish:</h5>
                <ul>
                    {unDoneTodos}
                </ul>

            </div>
        </div>

    )
}

export default Result