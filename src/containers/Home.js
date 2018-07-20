import React from 'react'
import Link from 'redux-first-router-link'
import { redirect } from 'redux-first-router'
import { connect } from 'react-redux'

function Home({ sendTo }) {
  return (
    <div>
      Soy Tonatiuh
      <Link to='/info'>
        A Info
      </Link>
    </div>
  )
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({
  sendTo: to => dispatch(redirect({ type: to }))
})

export default connect(mapState, mapDispatch)(Home)
