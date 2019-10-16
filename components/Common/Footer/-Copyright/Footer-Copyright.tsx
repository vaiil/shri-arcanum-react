import { cnFooter } from '../index'
import './Footer-Copyright.css'
import { cnText } from 'components/Base/Text'

const date = new Date()
export default () => (
  <div className={cnFooter('Copyright')}>
    &copy; 2007&ndash;{date.getFullYear()}
    {' '}
    <a href="https://yandex.ru" className={cnText({ view: 'link' })}>Yandex</a>
  </div>
)
