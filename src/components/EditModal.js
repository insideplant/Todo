import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

function EditModal({
  isOpenModal,
  setIsOpenModal,
  currentTodo,
  setCurrentTodo,
  setIsEditing
}){
  const { dispatch } = useContext(AppContext)
  const onEditInputChange = (e) => {
    e.preventDefault()
    dispatch({
      type: 'UPDATE_EVENT',
      id: currentTodo.id,
      status: currentTodo.status,
      limit: currentTodo.limit,
      todo: currentTodo.todo,
      body: currentTodo.body
    })
    setIsOpenModal(false)
    setIsEditing(false)
  }
  console.log(currentTodo)
  
  if (isOpenModal) {
    return (
      <>
        <div className="overlay">
          <form className="content">
            <div>
              <label htmlFor="date">Limit Date</label><br />
              <input type="date" id="date" value={currentTodo.limit} onChange={e => setCurrentTodo({...currentTodo, limit: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="todo">Todo</label><br />
              <input type="text" id="todo" value={currentTodo.todo} onChange={e => setCurrentTodo({...currentTodo, todo: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="body">Detail</label><br />
              <input type="textbox" id="body"value={currentTodo.body} onChange={e => setCurrentTodo({...currentTodo, body: e.target.value})}/>
            </div>

            <button onClick={onEditInputChange} >UPDATE</button>
            <button onClick={()=>{setIsOpenModal(false); setIsEditing(false);}}>CLOSE</button>
          </form>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default EditModal