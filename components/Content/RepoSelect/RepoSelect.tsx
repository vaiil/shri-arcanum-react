import { cnRepoSelect } from './index'
import { Dropdown } from '../../Base/Dropdown'
import RepoSelectCurrent from './-Current/RepoSelect-Current'
import RepoSelectItems from './-Items/RepoSelect-Items'
import { useSelector } from 'react-redux'
import { useState, useCallback, FC } from 'react'
import { Icon } from 'components/Base/Icon'
import { IconPlus } from 'components/Base/IconPlus'
import { IconPlusIcon } from '../../Base/IconPlus/-Icon'
import IconPlusBlock from 'components/Base/IconPlus/-Block/IconPlus-Block'
import './RepoSelect.css'
import { BaseState } from '../../../app/redux/@types/state'

const RepoSelect: FC = () => {
  const repoState = useSelector((state: BaseState) => state.repo)
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setOpen(!isOpen)
  }, [isOpen])
  return (
    <div className={cnRepoSelect()}>
      <IconPlus>
        <IconPlusBlock>
          <RepoSelectCurrent current={repoState.current} onClick={toggleOpen}/>
        </IconPlusBlock>
        <IconPlusIcon indentL="s">
          <Icon type="angleDown" onClick={toggleOpen}/>
        </IconPlusIcon>
      </IconPlus>
      <Dropdown isOpen={isOpen} width="small">
        <RepoSelectItems repos={repoState.repos}/>
      </Dropdown>
    </div>
  )
}
export default RepoSelect
