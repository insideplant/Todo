import React, { useState, useReducer } from 'react'
import "./styles.css";
import Modal from './components/Modal';
import Event from './components/Event'
import reducer from './reducers'

const App = () => {
  const [modal, setModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, [])
  const [status, setStatus] = useReducer(reducer,"TODO");

  const changeFlag= (status) => {
    switch(status){
      case 'TODO':
        return setStatus("DOING")
      case 'DOING':
        return setStatus("DONE")
      case 'DONE':
        return setStatus("TODO")
    }
  }

  return (
    <>
      <div className="createBox">
        <h2>ToDo List</h2>
        <Modal modal={modal} setModal={setModal} dispatch={dispatch} state={state} status={status}/>
        <div className="createButton">
          <button onClick={()=>setModal(true)}>Create a new Task</button>
        </div>
      </div>

      <div className="todoTable">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Status</th>
              <th>Limit</th>
              <th>Task</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App