import React from 'react'
import Link from 'redux-first-router-link'
import { redirect } from 'redux-first-router'
import { connect } from 'react-redux'
import g from 'glamorous'
import { css } from 'glamor'
import Content from '../components/Content'


function Home({ files }) {
  return (
    <Content>
      <h1>Home.js</h1>
      {files.map(F => (
        F.type === 'file' ? <File {...F} /> : <Dir {...F} />
      ))}
    </Content>
  )
}

const FileStyle = css({
  fontSize: '16px'
})

const DirStyle = css({
  fontSize: '16px',
  fontWeight: 'bold'
})

function File({ name }) {
  return <p {...FileStyle}>{`File: ${name}`}</p>
}

function Dir({ name }) {
  return <p {...DirStyle}>{`Directory: ${name}`}</p>
}

const mapState = ({ files }) => ({
  files
})

const mapDispatch = dispatch => ({
  sendTo: to => dispatch(redirect({ type: to }))
})

export default connect(mapState, mapDispatch)(Home)
