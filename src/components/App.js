import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState()

  return (
    <>
      <h1>ToDo List</h1>
      <div>
        <input value={task}/>     
      </div>
    </>
  )
}

export default App