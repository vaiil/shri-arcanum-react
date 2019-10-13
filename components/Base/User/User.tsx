import { cnUser, UserProps } from './index'
import UserFirstLetter from './-FirstLetter/User-FirstLetter'
import { FC } from 'react'

const User: FC<UserProps> = ({ name, className }) => (
  <span className={cnUser(null, [className])}>
    <UserFirstLetter letter={name.slice(0, 1)}/>
    {name.slice(1)}
  </span>
)

export default User
