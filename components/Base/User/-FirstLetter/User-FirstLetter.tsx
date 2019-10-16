import { cnUser } from '../index'
import './User-FirstLetter.css'

import { UserFirstLetterProps } from './index'
import { FC } from 'react'

const UserFirstLetter: FC<UserFirstLetterProps> = ({ letter }) => (
  <span className={cnUser('FirstLetter')}>{letter}</span>
)

export default UserFirstLetter
