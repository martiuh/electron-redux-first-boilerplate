import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import App from './containers/App'
import { AppContainer } from 'react-hot-loader'

import configureStore from './configureStore'

const history = createHistory()

const store = configureStore(history)

const render = App => {
  const appRoot = document.getElementById('app')

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    appRoot
  )
}

render(App)

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept()
  // module.hot.accept('./containers/App', () => {
  //   const App = require('./containers/App').default
  //   console.log('Se dispara')
  //   render(App)
  // })
}
