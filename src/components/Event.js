import React from 'react'

const Event = ({dispatch,event}) =>{
  const id = event.id
  const handleClickDeleteButton =() => {
    dispatch({type: 'DELETE_EVENT', id })
  }
  return (
    <tr>
      <td>{id}</td>
      <td><button >{event.status}</button></td>
      <td>{event.date}</td>
      <td>{event.task}</td>
      <td></td>
      <td></td>
      <td>
        <button>edit</button>
        <button onClick={handleClickDeleteButton}>ゴミ箱</button>
      </td>
    </tr>
  )
}

export default Event