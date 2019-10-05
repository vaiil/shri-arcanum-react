import { cn } from '@bem-react/classname'
import './Footer-Copyright.css'

const date = new Date()
export default () => (
  <div className={cn('Footer')('Copyright')}>
    &copy; 2007-{date.getFullYear()}
    <a href="https://yandex.ru">Yandex</a>
  </div>
)