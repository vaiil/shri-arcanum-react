import { useSelector } from 'react-redux'
import { Table } from 'components/Base/Table'
import { cnTree } from './index'
import TreeTableRow from './-TableRow/Tree-TableRow'
import TreeTableHead from './-TableHead/Tree-TableHead'

export default function Tree () {
  const treeState = useSelector(state => state.tree)
  const dirs = treeState.dirs
  const files = treeState.files
  const error = treeState.error

  return (
    <div className={cnTree()}>
      {error ? error :
        <Table>
          <TreeTableHead/>
          {
            dirs.map(dir => (
              <TreeTableRow key={dir.path} {...dir}/>
            ))
          }
          {
            files.map(file => (
              <TreeTableRow key={file.path} {...file}/>
            ))
          }
        </Table>
      }
    </div>
  )
}
