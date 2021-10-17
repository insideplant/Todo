import React from "react"
import Event from "./Event"

const Events = ({state, dispatch}) => {

  return(
    <div className="todoTable">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Status</th>
            <th>Limit</th>
            <th>Task</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
        </tbody>
      </table>
    </div>
  )
}

export default Events
