import { cn } from '@bem-react/classname'
import Link from 'next/link'
import Logo from 'components/Base/Logo/Logo'

import Header from './Header.css'
import HeaderInner from './-Inner/HeaderInner'

const cnHeader = cn('Header')
export default ({ className }) => (
  <header className={cnHeader(null, [className])}>
    <HeaderInner className={cnHeader('Inner')}>
      <Link href="/">
        <a><Logo/></a>
      </Link>

    </HeaderInner>
  </header>
)
