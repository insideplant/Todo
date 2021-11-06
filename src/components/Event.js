import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const Event = ({event}) =>{
  const {dispatch, handleEditClick, handleShow } = useContext(AppContext)
  const id = event.id
  const status = event.status
  const handleClickDeleteButton =() => {
    dispatch({type: 'DELETE_EVENT', id })
  }

  const handleClickStatusButton = () => {
    dispatch({
      type: 'STATUS_EVENT', 
      id, 
      status,
      limit: event.limit,
      todo: event.todo,
      body: event.body
    })
  }

  return (
    <tr>
      <td>{id}</td>
      <td><button onClick={handleClickStatusButton} className={event.status}>{event.status}</button></td>
      <td>{event.limit}</td>
      <td>{event.todo}</td>
      <td></td>
      <td>
        <button onClick={() => handleShow(event)}>show</button>
      </td>
      <td>
        <button onClick={() => handleEditClick(event)}>edit</button>
        <button onClick={handleClickDeleteButton}>delete</button>
      </td>
    </tr>
  )
}

export default Event