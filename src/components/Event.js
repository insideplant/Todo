import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const Event = ({event}) =>{
  const {dispatch, handleEditClick } = useContext(AppContext)
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
      task: event.task,
      body: event.body
    })
  }

  return (
    <tr>
      <td>{id}</td>
      <td><button onClick={handleClickStatusButton}>{event.status}</button></td>
      <td>{event.limit}</td>
      <td>{event.task}</td>
      <td></td>
      <td></td>
      <td>
        <button onClick={() => handleEditClick(event)}>edit</button>
        <button onClick={handleClickDeleteButton}>ゴミ箱</button>
      </td>
    </tr>
  )
}

export default Event