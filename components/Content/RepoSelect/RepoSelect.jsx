import { cnRepoSelect } from './index'
import { Dropdown } from '../../Base/Dropdown'
import RepoSelectCurrent from './-Current/RepoSelect-Current'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useCallback } from 'react'
import './RepoSelect.css'
import { List, ListItem } from '../../Base/List'
import Link from 'next/link'
import { cnText } from '../../Base/Text'

export default function RepoSelect () {
  const repoState = useSelector(state => state.repo)
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setOpen(!isOpen)
  }, [isOpen])
  return (
    <div className={cnRepoSelect()}>
      <RepoSelectCurrent current={repoState.current} onClick={toggleOpen}/>
      <Dropdown isOpen={isOpen} width="small">
        <List indentV="m">
          {
            repoState.repos.map(repoName => (
              <ListItem key={repoName}>
                <Link href="/repos/[repoName]" as={`/repos/${repoName}`}>
                  <a className={cnText({ view: 'primary' })}>{repoName}</a>
                </Link>
              </ListItem>
            ))
          }
        </List>
      </Dropdown>
    </div>
  )
}
