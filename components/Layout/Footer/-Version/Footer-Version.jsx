import { cn } from '@bem-react/classname'
import './Footer-Version.css'

const packageJson = require('../../../../package')
export default () => (
  <div className={cn('Footer')('Version')}>{packageJson.version}</div>
)