
import React, { useState, useReducer, useMemo, useEffect } from 'react'
import "./styles.css";
import AddModal from './components/AddModal';
import EditModal from './components/EditModal';
import reducer from './reducers';
import Events from './components/Events';
import AppContext from './contexts/AppContext';
import SortButton from './components/SortButton';
import Show from './components/Show';

const App = () => {
  
  const APP_KEY = "appWithRedux"
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState? JSON.parse(appState) : [];
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [state, dispatch] = useReducer(reducer,initialState)
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})
  const [sort, setSort] = useState({});
  

  const SORTNAMES = ["id","status","limit","todo"];

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
  }, [sort, state]);

  const handleSort = (sortName) => {
    
    if (sort.key === sortName) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: sortName,
        order: 1
      })
    }
  };

  const handleEditClick = (event) => {
    setIsEditing(true)
    setIsOpenModal(true)
    setCurrentTodo({...event})
  }
  
  const handleShow = (event) => {
    setIsShow(true)
    setCurrentTodo({...event})
  }
  
  useEffect (() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  },[state])

  return (
    <AppContext.Provider value={{dispatch, handleEditClick, handleShow}}>
      <div className="createBox">
        {isEditing ? (
          <EditModal
            currentTodo = {currentTodo}
            setCurrentTodo = {setCurrentTodo}
            isOpenModal = {isOpenModal}
            setIsEditing = {setIsEditing}
            setIsOpenModal={setIsOpenModal}
          />
        ) : (
          <AddModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
        <h1>ToDo List</h1>
        <div className="createButton">
          <button onClick={()=>setIsOpenModal(true)}>Create a new ToDo</button>
        </div>
      </div>
      <div>
        <Show 
          show={isShow}
          handleShow={handleShow}
          currentTodo = {currentTodo}
          setIsShow = {setIsShow}
        />
      </div>
      {
        SORTNAMES.map((sortName, index) => (
        <SortButton
          key={index}
          sortName={sortName}
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