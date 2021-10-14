import React, { useState } from 'react'
import "./styles.css";
import Modal from './components/Modal';

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <h2>ToDo List</h2>
      <Modal modal={modal} setModal={setModal}/>
      <button onClick={()=>setModal(true)}>Create a new Task</button>
    </>
  )
}

export default App