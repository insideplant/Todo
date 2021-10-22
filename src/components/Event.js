import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const Event = ({event}) =>{
  const {dispatch, handleEditClick } = useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton =() => {
    dispatch({type: 'DELETE_EVENT', id })
  }
  return (
    <tr>
      <td>{id}</td>
      <td></td>
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