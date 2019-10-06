import { cnUser } from './index'
import UserFirstLetter from './-FirstLetter/User-FirstLetter'

export default ({ name }) => (
  <span className={cnUser()}>
    <UserFirstLetter letter={name.slice(0, 1)}/>
    {name.slice(1)}
  </span>
)
