import { cnFileViewer } from '../index'
import { Icon } from 'components/Base/Icon'
import { Text } from 'components/Base/Text'
import './FileView-InfoBar.css'

export default ({ name, size }) => (
  <div className={cnFileViewer('InfoBar')}>
    <Icon type="fileCode"/>
    <Text>{name}</Text>
    <Text>({size})</Text>
  </div>
)