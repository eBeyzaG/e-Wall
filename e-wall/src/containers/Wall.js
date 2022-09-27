import React from 'react'
import Timer from '../features/timers/Timer'
import TodoList from '../features/todos/TodoList'
import "../App.css"

const Home = () => {
  return (
    <div className='container'>
        <Timer/>
        <TodoList />
    </div>
  )
}

export default Home