import { Container } from 'components/Base/Container'
import { cn } from '@bem-react/classname'
import './Footer-Inner.css'
import { FC } from 'react'

const FooterInner: FC = ({ children }) => (
  <Container type="fluid" className={cn('Footer')('Inner')}>
    {children}
  </Container>
)
export default FooterInner
