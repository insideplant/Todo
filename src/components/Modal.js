import React, { useState } from 'react'

function Modal({status, modal, setModal, dispatch, state}){
  const [task, setTask] = useState('')
  const [body, setBody] = useState('')
  const [date, setDate] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      status,
      date,
      task,
      body
    })

  }
  console.log(state)
  
  if (modal) {
    return (
      <>
        <div id="overlay">
          <form id="content">
            <div>
              <label htmlFor="date">Limit Date</label><br />
              <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="task">To do</label><br />
              <input type="text" id="task" value={task} onChange={e => setTask(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="body">詳細</label><br />
              <input type="textbox" id="body"value={body} onChange={e => setBody(e.target.value)}/>
            </div>

            <button onClick={addEvent} status={status}>Create a ToDo</button> <br />
            <button onClick={()=>setModal(false)}>close</button>
          </form>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default Modal