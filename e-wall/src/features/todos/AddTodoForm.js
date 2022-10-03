import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { todoAdded, selectAllTodos } from './todosSlice'



const AddTodoForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const todos = useSelector(selectAllTodos)

    const [todoData, setTodoData] = useState({
        title: '',
        content: ''
    })

    const { title, content } = todoData

    const onChange = e => setTodoData({ ...todoData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        dispatch(todoAdded(title, content))

        setTodoData({
            title: '',
            content: ''
        }
        )

    }

    const renderedTodos = todos.map(todo => (
        <div className='todoElement' key={todo.id} >
        <article style={{marginBottom: '2%'}} >
            <h5>{todo.title}</h5>
            <p>{todo.content}</p>
        </article>
        </div>
    ))




    return (
        <div className='setTimer'>
            <h2>I WILL...</h2>
            <br></br>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control '
                        type='text'
                        placeholder='To Do Title'
                        onChange={e => onChange(e)}
                        value={title}
                        name='title'
                    />
                </div>
                <br></br>
                <div className='form-group'>
                    <textarea
                        className='form-control '
                        type='text'
                        placeholder='To Do Content'
                        onChange={e => onChange(e)}
                        value={content}
                        name='content'
                    />
                </div>
                <br></br>
                <button type='submit'>ADD</button>
            </form>
            <br></br>
            {renderedTodos}
            <button onClick={() => navigate('/wall')}>START SESSION</button>


        </div>
    )
}

export default AddTodoForm