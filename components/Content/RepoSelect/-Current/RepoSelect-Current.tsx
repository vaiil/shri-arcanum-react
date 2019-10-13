import { cnRepoSelect } from '../index'
import { RepoSelectCurrentProps } from './index'
import { Text } from 'components/Base/Text'
import './RepoSelect-Current.css'
import { FC } from 'react'

const Current: FC<RepoSelectCurrentProps> = ({ current, onClick }) => (
  <div className={cnRepoSelect('Current')} onClick={onClick}>
    <Text view="primary" weight="medium">Repository</Text>
    {' '}
    {
      current ?
        (<Text view="primary">{current}</Text>) :
        (<Text view="secondary">Not chosen</Text>)
    }
  </div>
)
export default Current
