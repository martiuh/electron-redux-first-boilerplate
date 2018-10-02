// CRUD files
import * as a from '../actions'

export default function files(state = [], action = {}) {
  const { type, payload } = action
  switch (type) {
    case a.ADD_ITEM:
      return [...state, payload]
    case a.PURGE_FILES:
      return [...state.slice(0, 0)]
    case a.REMOVE_ITEM:
      return state.filter(({ fullPath }) => fullPath !== payload)
    default:
      return state
  }
}
