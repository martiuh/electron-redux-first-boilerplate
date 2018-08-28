import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { NOT_FOUND } from 'redux-first-router'
import Link from 'redux-first-router-link'

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
      <nav>
        <Link to='/home'>Home</Link>
        <Link to ='/info'>Info</Link>
      </nav>
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
