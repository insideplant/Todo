
const events = (state = [], action) => {
  switch(action.type){
    case 'CREATE_EVENT':
      const event = { date: action.date,task: action.task, body: action.body}
      const length = state.length
      const id = length === 0 ? 1 : state[length -1].id + 1
      return [...state, {id, ...event}]
    case 'UPDATE_EVENT':
      const updateEvent = {id: action.id, date: action.date, task: action.task, body: action.body}
      const updateState = state.map((event)=>{
        return event.id ===action.id? updateEvent : state;
      })
      return [...updateState]
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id)
    case 'DELETE_ALL_EVENTS':
      return []
    default: 
      return state
  }
}

export default events