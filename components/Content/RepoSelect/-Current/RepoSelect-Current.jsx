import { cnRepoSelect } from '../index'
import { Text } from '../../../Base/Text'
import './RepoSelect-Current.css'

export default ({ current, onClick }) => (
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
