import TableRow from 'components/Base/Table/-Row/Table-Row'
import { TableCell } from 'components/Base/Table/-Cell'
import Link from 'next/link'
import { User } from 'components/Base/User'
import TimeFromNow from 'components/Base/TimeFromNow/TimeFromNow'
import { Icon } from 'components/Base/Icon'
import { useSelector } from 'react-redux'
import { cnText } from 'components/Base/Text'
import { cnIconPlus } from '../../../Base/IconPlus'
import { cnIconPlusIcon } from '../../../Base/IconPlus/-Icon'
import IconPlusBlock from '../../../Base/IconPlus/-Block/IconPlus-Block'
import { BaseState } from '../../../../app/redux/@types/base'
import { TreeObject } from '../../../../app/redux/@types/tree'
import { FC } from 'react'

const TreeTableRow: FC<TreeObject> = ({ path, name, type, commitHash, commitSubject, timestamp, committer }) => {
  const repoName = useSelector((state: BaseState) => state.repo.current)
  const branch = useSelector((state: BaseState) => state.branch.current)

  const href = `/repos/[repoName]/${type === 'dir' ? 'tree' : 'blob'}/[branch]/[path...]`
  const as = `/repos/${repoName}/${type === 'dir' ? 'tree' : 'blob'}/${branch}/${path}`
  return (
    <TableRow>
      <TableCell>
        <Link
          href={href}
          as={as}>
          <a className={cnIconPlus(null, [cnText()])}>
            <Icon type={type === 'dir' ? 'folder' : 'fileCode'} className={cnIconPlusIcon({ indentR: 'xxs' })}/>
            <IconPlusBlock>{name}</IconPlusBlock>
          </a>
        </Link>
      </TableCell>
      <TableCell className={cnText({ view: 'link' })}>
        {commitHash}
      </TableCell>
      <TableCell>
        {commitSubject}
      </TableCell>
      <TableCell>
        <User name={committer}/>
      </TableCell>
      <TableCell>
        <TimeFromNow timestamp={timestamp}/>
      </TableCell>
    </TableRow>
  )
}
export default TreeTableRow
