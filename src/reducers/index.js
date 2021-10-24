
const events = (state = [], action) => {
  switch(action.type){
    case 'CREATE_EVENT':
      const event = { 
        limit: action.limit,
        status: "TODO",
        task: action.task, 
        body: action.body
      }
      const length = state.length
      const id = length === 0 ? 1 : state[length -1].id + 1
      return [...state, {id, ...event}]
    case 'UPDATE_EVENT':
      const updateEvent = {
        id: action.id, 
        status: action.status, 
        limit: action.limit,
        task: action.task,
        body: action.body
      }
      const updateState = state.map(event=> event.id ===action.id? updateEvent : event)
      return [...updateState]
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id)
    case 'DELETE_ALL_EVENTS':
      return []
    case 'STATUS_EVENT':
      if (action.status === "TODO"){
          const updateEvent = {
            id: action.id,
            status: "DOING",
            limit: action.limit,
            task: action.task,
            body: action.body
          }
          const updateState = state.map(event=> event.id ===action.id? updateEvent : event)
          return [...updateState]
        } else if (action.status === "DOING"){
          const updateEvent = {
            id: action.id,
            status: "DONE",
            limit: action.limit,
            task: action.task,
            body: action.body
          }
          const updateState = state.map(event=> event.id ===action.id? updateEvent : event)
          return [...updateState]
        } else {
          const updateEvent = {
            id: action.id,
            status: "TODO",
            limit: action.limit,
            task: action.task,
            body: action.body
          }
          const updateState = state.map(event=> event.id ===action.id? updateEvent : event)
          return [...updateState]
        }
    default:
      return state
  }
}

export default events