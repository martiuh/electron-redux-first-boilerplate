import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { NOT_FOUND } from 'redux-first-router'

import Home from './Home'
import Info from './Info'
import NotFound from './NotFound'

const Routes = {
  HOME: Home,
  INFO: Info,
  [NOT_FOUND]: NotFound
}

const App = ({ page }) => {
  const Page = Routes[page]
  return (
    <div>
      <h1>{page} con Juju</h1>
      <Page />
    </div>
  )
}

const mapState = ({ page }) => ({
  page
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(App)
