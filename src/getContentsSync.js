import fs from 'fs'
import path from 'path'
import { uniqueId } from './utils'

const directoryPath = path.resolve(__dirname, 'src/directory')

export default function getContentsSync() {
  const items = fs.readdirSync(directoryPath)
  const contents = []
  items.forEach(I => {
    const itemPath = `${directoryPath}/${I}`
    const stat = fs.statSync(itemPath)
    /*
      Cosas que vamos a sacar
      type: file or directory
      size: MB
      name: string,
      key: // For React purposes
    */
    const item = {
      key: uniqueId(),
      type: stat.isFile() ? 'file' : 'directory',
      size: stat.size,
      name: I
    }
    if (item.type === 'directory') {
      const dirItems = fs.readdirSync(itemPath)
      item.name = `${item.name}/` // Just some silly thing
    }
    contents.push(item)
  })
  return contents
}
