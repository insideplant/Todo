import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

function EditModal({
  modal,
  setModal,
  currentTodo,
  setCurrentTodo
}){
  const { dispatch } = useContext(AppContext)
  const onEditInputChange = (e) => {
    e.preventDefault()
    dispatch({
      type: 'UPDATE_EVENT',
      id: currentTodo.id,
      date: currentTodo.date,
      task: currentTodo.task,
      body: currentTodo.body
    })
  }
  console.log(currentTodo)
  
  if (modal) {
    return (
      <>
        <div id="overlay">
          <form id="content">
            <div>
              <label htmlFor="date">Limit Date</label><br />
              <input type="date" id="date" value={currentTodo.date} onChange={e => setCurrentTodo({...currentTodo, date: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="task">To do</label><br />
              <input type="text" id="task" value={currentTodo.task} onChange={e => setCurrentTodo({...currentTodo, task: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="body">詳細</label><br />
              <input type="textbox" id="body"value={currentTodo.body} onChange={e => setCurrentTodo({...currentTodo, body: e.target.value})}/>
            </div>

            <button onClick={onEditInputChange} >Update a ToDo</button> <br />
            <button onClick={()=>setModal(false)}>close</button>
          </form>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default EditModal