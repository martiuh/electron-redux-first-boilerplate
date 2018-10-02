import 'glamor/reset'

import React from 'react'
import { connect } from 'react-redux'
import { NOT_FOUND } from 'redux-first-router'
import { NavLink } from 'redux-first-router-link'
import g from 'glamorous'
import { css } from 'glamor'

import Home from './Home'
import NotFound from './NotFound'
import About from './About'

const Routes = {
  HOME: Home,
  ABOUT: About,
  [NOT_FOUND]: NotFound
}

const Navigator = g.nav({
  paddingTop: '10px'
})

const NavLinkStyle = css({
  color: 'black',
  textDecoration: 'none',
  boxSizing: 'border-box',
  padding: '10px'
})


const NavigationLink = ({ children, ...props }) => (
  <NavLink
    {...props}
    {...NavLinkStyle}
    exact
  >
    {children}
  </NavLink>
)

const App = ({ page }) => {
  const Page = Routes[page]
  const colorMapping = page === 'HOME' ? 'linear-gradient(to right, #faaca8, #ddd6f3)' : 'linear-gradient(to right, #de6262, #ffb88c)'

  const Apptainer = g.div({
    height: '100vh',
    flexDirection: 'column',
    background: colorMapping
  })

  return (
    <Apptainer>
      <Navigator>
        <NavigationLink to='/'>Home</NavigationLink>
        <NavigationLink to='/about'>About</NavigationLink>
      </Navigator>
      <Page />
    </Apptainer>
  )
}

const mapState = ({ page }) => ({
  page
})

export default connect(mapState, null)(App)
