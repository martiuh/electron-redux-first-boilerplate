import React from 'react'
import Link from 'redux-first-router-link'
import { redirect } from 'redux-first-router'
import { connect } from 'react-redux'

function Home({ sendTo }) {
  return (
    <div>
      <h1>Pedron</h1>
      <div
        className='flip-container'
      >
        <div className='flipper'>
          <div className='front'>
            Herou
          </div>
          <div className='back'>
            Bye!!!!
          </div>
        </div>
      </div>
    </div>
  )
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({
  sendTo: to => dispatch(redirect({ type: to }))
})

export default connect(mapState, mapDispatch)(Home)
