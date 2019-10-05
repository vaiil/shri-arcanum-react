import './HeaderInner.css'
import Container from '../../../Base/Container/Container'

export default ({children, className}) => (
  <Container type="centered" className={className}>
    {children}
  </Container>
)
