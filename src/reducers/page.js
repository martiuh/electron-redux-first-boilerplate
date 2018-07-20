import routesMap from '../routes'
import { NOT_FOUND } from 'redux-first-router'

export default (state = 'HOME', action = {}) => {
  const { type } = action
  return routesMap[type] ? type : state
}
