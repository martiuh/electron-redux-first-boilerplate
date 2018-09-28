import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import { connectRoutes } from 'redux-first-router'
import reduxThunk from 'redux-thunk'
// import persistState from 'redux-localstorage'

import routesMap from './routes'
import getContentsSync from './getContentsSync'
import options from './options'
import * as reducers from './reducers'
import * as actionCreators from './actions'

export default history => {
  const {
    reducer, middleware, enhancer
  } = connectRoutes(
    history, routesMap, options
  )

  const rootReducer = combineReducers({ ...reducers, location: reducer })
  const middlewares = applyMiddleware(middleware)
  const REDUX_THUNK = applyMiddleware(reduxThunk)

  const enhancers = compose(
    enhancer,
    middlewares,
    REDUX_THUNK
  )

  const initialClientState = { files: getContentsSync() }
  const preLoadedState = { ...initialClientState }

  const store = createStore(rootReducer, preLoadedState, enhancers)

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers') // eslint-disable-line global-require
      const rootReducer = combineReducers({ ...reducers, location: reducer })
      store.replaceReducer(rootReducer)
    })
  }
  return store
}
