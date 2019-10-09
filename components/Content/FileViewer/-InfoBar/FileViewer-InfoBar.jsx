import { cnFileViewer } from '../index'
import { Icon } from 'components/Base/Icon'
import { Text } from 'components/Base/Text'
import './FileView-InfoBar.css'
import { IconPlus } from 'components/Base/IconPlus'
import { IconPlusIcon } from 'components/Base/IconPlus/-Icon'
import { IconPlusBlock } from 'components/Base/IconPlus/-Block'
import prettyBytes from 'pretty-bytes'

export default ({ name, size }) => (
  <div className={cnFileViewer('InfoBar')}>
    <IconPlus>
      <IconPlusIcon indentR="s">
        <Icon type="fileCode"/>
      </IconPlusIcon>
      <IconPlusBlock>
        <Text>{name}</Text>
        {' '}
        <Text view="ghost">({prettyBytes(size)})</Text>
      </IconPlusBlock>
    </IconPlus>
  </div>
)