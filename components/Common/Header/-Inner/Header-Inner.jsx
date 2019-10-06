import { cnHeader } from '../index'
import './Header-Inner.css'
import { Container } from 'components/Base/Container'

export default ({ children }) => (
  <Container type="centered" className={cnHeader('Inner')}>
    {children}
  </Container>
)
