import React from 'react'

const Note = () => {
  return (
    <div className='container'>
      
        <div className="card note" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title" style={{textAlign: 'center'}} >To-Do List</h5>
                 </div>
            <ul className=" list-group list-group-flush">
              <li className="list-group-item ">
              <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
              </li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
        </div>
    </div>
  )
}

export default Note