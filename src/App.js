import React, { useState, useReducer } from 'react'
import "./styles.css";
import AddModal from './components/AddModal';
import EditModal from './components/EditModal';
import reducer from './reducers';
import Events from './components/Events';
import AppContext from './contexts/AppContext';
import SortButton from './components/Sortbutton';

const App = () => {
  const [modal, setModal] = useState(false);

  const [state, dispatch] = useReducer(reducer, [])
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  const KEYS = ["id","status","limit","task"];

  // const [status, setStatus] = useReducer(reducer,"TODO");

  // const changeFlag= (status) => {
  //   switch(status){
  //     case 'TODO':
  //       return setStatus("DOING")
  //     case 'DOING':
  //       return setStatus("DONE")
  //     case 'DONE':
  //       return setStatus("TODO")
  //   }
  // }

  const handleEditClick = (event) => {
    setIsEditing(true)
    setModal(true)
    setCurrentTodo({...event})
  }


  return (
    <AppContext.Provider value={{dispatch, handleEditClick}}>
      <div className="createBox">
        {isEditing ? (
          <EditModal
            currentTodo = {currentTodo}
            setCurrentTodo = {setCurrentTodo}
            modal = {modal}
            setIsEditing = {setIsEditing}
            setModal={setModal}
          />
        ) : (
          <AddModal
            modal={modal}
            setModal={setModal}
          />
        )}
        <h2>ToDo List</h2>
        <div className="createButton">
          <button onClick={()=>setModal(true)}>Create a new Task</button>
        </div>
      </div>
      {
        KEYS.map((key, index) => (
        <SortButton
          key={index}
          sortbutton={key} />
        ))
      }

      <Events state={state} dispatch={dispatch} />
    </AppContext.Provider>
  )
}

export default App