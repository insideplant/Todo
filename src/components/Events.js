import React from "react"
import Event from "./Event"

const Events = ({state, dispatch}) => {

  return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>STATUS</th>
            <th>LIMIT</th>
            <th>TODO</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
        </tbody>
      </table>
  )
}

export default Events
