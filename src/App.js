
import React, { useState, useReducer, useMemo, useEffect } from 'react'
import "./styles.css";
import AddModal from './components/AddModal';
import EditModal from './components/EditModal';
import reducer from './reducers';
import Events from './components/Events';
import AppContext from './contexts/AppContext';
import SortButton from './components/Sortbutton';

const App = () => {
  const [modal, setModal] = useState(false);
  const [state, dispatch] = useReducer(reducer,initialState)
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})
  const [sort, setSort] = useState({});
  const APP_KEY = "appWithRedux"

  const KEYS = ["id","status","limit","task"];

  let sortedStates = useMemo(() => {
    let _sortedStates = state;
    if (sort.key) {
      _sortedStates = _sortedStates.sort((a,b) => {
        a = a[sort.key];
        b = b[sort.key];

        if(a === b) {
          return 0;
        }
        if(a > b) {
          return 1 * sort.order;
        }
        if(a < b) {
          return -1 * sort.order;
        } 
      });
    }
    return _sortedStates;
  }, [sort, state])

  const handleSort = (key) => {
    console.log('click : ' + key);
    if (sort.key === key) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: key,
        order: 1
      })
    }
  };


  const handleEditClick = (event) => {
    setIsEditing(true)
    setModal(true)
    setCurrentTodo({...event})
  }
  
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState? JSON.parse(appState) : []
  
  useEffect (() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  },[state])

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
          sortbutton={key}
          handleSort={handleSort} />
        ))
      }
      <div className="tableBox">
        <Events state={sortedStates} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App