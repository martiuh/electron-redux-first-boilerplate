import { NOT_FOUND } from 'redux-first-router'

import routesMap from '../routes'

export default (state = 'HOME', action = {}) => {
  const { type } = action
  return routesMap[type] ? type : state
}
