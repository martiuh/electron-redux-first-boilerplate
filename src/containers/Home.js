import React from 'react'
import Link from 'redux-first-router-link'
import { redirect } from 'redux-first-router'
import { connect } from 'react-redux'
import g from 'glamorous'
import { css } from 'glamor'
import chokidar from 'chokidar'
import path from 'path'

import { addItem, purgeFiles, removeItem } from '../actions'
import { uniqueId } from '../utils'
import Content from '../components/Content'

const baseDir = /workspace\/*/
// I will keep track of the events here because, when I live this component I'll unsubscribe to chokidar

const dirPath = path.join(__dirname, '../workspace')

class Home extends React.Component {
  componentDidMount() {
    const { purgeFiles } = this.props
    purgeFiles()
    this.watcher = chokidar.watch(dirPath, {
      ignored: /^\./,
      persistent: true
    })
    this.watcher.on('add', this._addItem)
    this.watcher.on('addDir', this._addItem)
    this.watcher.on('unlink', this._removedItem)
    this.watcher.on('unlinkDir', this._removedItem)
  }

  componentWillUnmount() {
    // watcher.close()
  }

  watcher = null

  _addItem = (path, stats) => {
    // TODO: Nest directories
    const { addItem } = this.props
    if (stats && path !== dirPath) {
      const item = {
        name: path,
        fullPath: path,
        type: stats.isFile() ? 'file' : 'directory',
        key: uniqueId(),
        size: stats.size
      }
      addItem(item)
    }
  }

  _removedItem = (path, stats) => {
    const { removeItem } = this.props
    console.log(`${path} has been removed!!!`)
    removeItem(path)
  }


  render() {
    const { files } = this.props
    return (
      <Content>
        <h1>Home.js</h1>
        {files.map(F => (
          F.type === 'file' ? <File {...F} /> : <Dir {...F} />
        ))}
      </Content>
    )
  }
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
  addItem: item => dispatch(addItem(item)),
  removeItem: path => dispatch(removeItem(path)),
  purgeFiles: () => dispatch(purgeFiles())
})

export default connect(mapState, mapDispatch)(Home)
