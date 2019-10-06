import { cnUser } from '../index'
import './User-FirstLetter.css'

export default ({ letter }) => (
  <span className={cnUser('FirstLetter')}>{letter}</span>
)
