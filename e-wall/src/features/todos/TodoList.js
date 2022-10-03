import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAllTodos, todoDoneUpdated } from './todosSlice'

const Note = () => {

  const todos = useSelector(selectAllTodos)
  const dispatch = useDispatch()

  const onCheckBoxChange = (id, checked) => {

    dispatch(todoDoneUpdated(id, checked))

  }

  const renderedTodoList = todos.map(todo => (
    <li className="list-group-item " key={todo.id}>
      <div className="form-check">
        <input onChange={e => onCheckBoxChange(todo.id, e.target.checked)} className="form-check-input" type="checkbox" value={todo.done} id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {todo.title}
        </label>
        <p>{todo.content}</p>
      </div>
    </li>
  )
  )

  return (
    <div className='container' >
      <div style={{display: 'flex',
justifyContent: 'center' }}>
        <div className="card note" style={{ width: '40%', textAlign: 'center' }}>
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: 'center' }} >To-Do List</h5>
          </div>
          <ul className=" list-group list-group-flush">
            {renderedTodoList}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Note