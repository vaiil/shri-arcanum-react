import { Container } from 'components/Base/Container'
import { cn } from '@bem-react/classname'
import './Footer-Inner.css'

export default ({ children }) => (
  <Container type="fluid" className={cn('Footer')('Inner')}>
    {children}
  </Container>
)
