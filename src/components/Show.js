import React from "react"

const Show = ({show: isShow,currentTodo,setIsShow}) => {

  if(isShow){
  return (
    <div className="overlay">
      <div className="content">
        <h2>detail</h2>
        <div className="detail-table">
          <table> 
            <tbody>
              <tr>
                <td>Status</td>
                <td>{currentTodo.status}</td>
              </tr>
              <tr>
                <td>Limit</td>
                <td>{currentTodo.limit}</td>
              </tr>
              <tr>
                <td>Todo</td>
                <td>{currentTodo.todo}</td>
              </tr>
              <tr>
                <td>Detail</td>
                <td>{currentTodo.body}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button onClick={()=>setIsShow(false)}>CLOSE</button>
      </div>
    </div>
  )
  } else {
    return null;
  }
}

export default Show