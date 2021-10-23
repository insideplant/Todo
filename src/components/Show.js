import React from "react"

const Show = ({show,currentTodo,setShow}) => {
  console.log(currentTodo);

  if(show){
  return (
    <div className="overlay">
      <div className="content">
        <h2>detail</h2>
        <table> 
          <tbody>
            <tr>
              <td>status</td>
              <td>{currentTodo.status}</td>
            </tr>
            <tr>
              <td>Limit</td>
              <td>{currentTodo.limit}</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>{currentTodo.task}</td>
            </tr>
            <tr>
              <td>Body</td>
              <td>{currentTodo.body}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={()=>setShow(false)}>close</button>
      </div>
    </div>
  )
  } else {
    return null;
  }
}

export default Show