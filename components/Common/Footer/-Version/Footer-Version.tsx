import { cnFooter } from '../index'
import './Footer-Version.css'

const packageJson = require('../../../../package')
export default () => (
  <div className={cnFooter('Version')}>v{packageJson.version}</div>
)
