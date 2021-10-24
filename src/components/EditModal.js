import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

function EditModal({
  modal,
  setModal,
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
      task: currentTodo.task,
      body: currentTodo.body
    })
    setModal(false)
    setIsEditing(false)
  }
  console.log(currentTodo)
  
  if (modal) {
    return (
      <>
        <div className="overlay">
          <form className="content">
            <div>
              <label htmlFor="date">Limit Date</label><br />
              <input type="date" id="date" value={currentTodo.limit} onChange={e => setCurrentTodo({...currentTodo, limit: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="task">Todo</label><br />
              <input type="text" id="task" value={currentTodo.task} onChange={e => setCurrentTodo({...currentTodo, task: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="body">詳細</label><br />
              <input type="textbox" id="body"value={currentTodo.body} onChange={e => setCurrentTodo({...currentTodo, body: e.target.value})}/>
            </div>

            <button onClick={onEditInputChange} >UPDATE</button> <br />
            <button onClick={()=>{setModal(false); setIsEditing(false);}}>CLOSE</button>
          </form>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default EditModal