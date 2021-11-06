import React, { useContext, useState } from 'react'
import AppContext from '../contexts/AppContext'


function AddModal({
  isOpenModal,
  setIsOpenModal,
}){
  const { dispatch } = useContext(AppContext)
  const [todo, setTodo] = useState('')
  const [body, setBody] = useState('')
  const [limit, setLimit] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      limit,
      todo,
      body
    })
    setIsOpenModal(false)
    setLimit("")
    setTodo("")
    setBody("")
  }
  
  if (isOpenModal) {
    return (
      <>
        <div className="overlay">
          <form className="content">
            <div>
              <label htmlFor="date">Limit Date</label><br />
              <input type="date" id="date" value={limit} onChange={e => setLimit(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="todo">To do</label><br />
              <input type="text" id="todo" value={todo} onChange={e => setTodo(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="body">Detail</label><br />
              <input type="textbox" id="body"value={body} onChange={e => setBody(e.target.value)}/>
            </div>

            <button onClick={addEvent} >CREATE</button> 
            <button onClick={()=>setIsOpenModal(false)}>CLOSE</button>
          </form>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default AddModal