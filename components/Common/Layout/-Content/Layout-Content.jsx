import { cnLayout } from '../index'
import './Layout-Content.css'
import { Container } from 'components/Base/Container'

export default ({ children }) => (
  <div className={cnLayout('Content')}>
    <Container type="centered">
      {children}
    </Container>
  </div>
)
