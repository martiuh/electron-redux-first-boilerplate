import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { connectRoutes } from 'redux-first-router'
import reduxThunk from 'redux-thunk'
// import persistState from 'redux-localstorage'

import routesMap from './routes'
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

  const initialClientState = { }
  const preLoadedState = { ...initialClientState }

  const store = createStore(rootReducer, preLoadedState, enhancers)

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./reducers/index', () => {
     const reducers = require('./reducers/index')
     const rootReducer = combineReducers({ ...reducers, location: reducer })
     store.replaceReducer(rootReducer)
    })
 }

  return store
}
