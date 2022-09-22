import React from 'react'
import Timer from '../components/Timer'
import Note from '../components/TodoList'
import "../App.css"

const Home = () => {
  return (
    <div className='container'>
        <Timer/>
        <Note />
    </div>
  )
}

export default Home