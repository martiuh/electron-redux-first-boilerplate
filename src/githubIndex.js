import { connectRoutes } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { NOT_FOUND } from 'redux-first-router'
import { hot } from 'react-hot-loader'

const history = createHistory()

// THE WORK:
const routesMap = {
  HOME: '/',      // action <-> url path
  USER: '/usuario',  // :id is a dynamic segment
}

const page = (state = 'HOME', action = {}) => {
  const { type } = action
  const route = routesMap[type]
  return route ? type : state
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspects

// and you already know how the story ends:

const rootReducer = combineReducers({ location: reducer, page })
const middlewares = applyMiddleware(middleware)
// note the order: enhancer, then middlewares
const store = createStore(rootReducer, compose(enhancer, middlewares))

const Home = () => <h1>Home</h1>
const User = () => <h1>User</h1>

const routeComponents = {
  HOME: Home,
  USER: User,
  [NOT_FOUND]: () => <h1>NOT FOUND</h1>
}

const App = ({ page, onClick }) => {
  const Page = routeComponents[page]
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Link to='/usuario'>Usuar</Link>
        <Link to='/'>Inicio</Link>
      </div>
      <Page />
    </div>
  )
}

const mapStateToProps = ({ page }) => ({ page })
const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch({ type: 'USER', payload: { id: 5 } })
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

const MyApp = hot(module)(AppContainer)

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('app')
)
