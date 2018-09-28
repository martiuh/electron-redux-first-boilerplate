import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'
import configureStore from './configureStore'

const history = createHistory()

const store = configureStore(history)

const render = Application => {
  const appRoot = document.getElementById('app')

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Application />
      </Provider>
    </AppContainer>,
    appRoot
  )
}

render(App)

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    console.log('Se dispara')
    render(NextApp)
  })
}
