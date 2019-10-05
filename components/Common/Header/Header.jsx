import { cnHeader } from './index'
import Link from 'next/link'
import Logo from 'components/Base/Logo/Logo'
import { RepoSelect } from 'components/Content/RepoSelect'

import './Header.css'
import HeaderInner from './-Inner/Header-Inner'
import HeaderItem from './-Item/Header-Item'

export default ({ className }) => (
  <header className={cnHeader(null, [className])}>
    <HeaderInner>
      <HeaderItem>
        <Link href="/">
          <a><Logo/></a>
        </Link>
      </HeaderItem>
      <HeaderItem>
        <RepoSelect/>
      </HeaderItem>
    </HeaderInner>
  </header>
)
