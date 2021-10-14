import React, { useState } from 'react'
function Modal({modal, setModal}){
  const [task, setTask] = useState("")
  const [body, setBody] = useState("")

  if (modal) {
    return (
      <>
        <div id="overlay">
          <div id="content">
            <div>
              <label for="task">To do</label><br />
              <input type="text" id="task" value={task}/>
            </div>
            <div>
              <label for="body">詳細</label><br />
              <input type="textbox" id="body"value={body}/>
            </div>
            <button onClick={()=>setModal(false)}>close</button>
          </div>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default Modal