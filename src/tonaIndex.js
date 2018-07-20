import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import App from './containers/App'
import configureStore from './configureStore'

const history = createHistory()

const { store } = configureStore(history)
const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  app
)