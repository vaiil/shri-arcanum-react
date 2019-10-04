import { cn } from '@bem-react/classname'
import Link from 'next/link'
import Logo from 'components/Base/Logo/Logo'

const cnHeader = cn('Header')
export default ({ className }) => (
  <header className={cnHeader(null, [className])}>
    <Link
      href={'/'}>
      <Logo/>
    </Link>
  </header>
)
