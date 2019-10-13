import { cnHeader } from '../index'
import './Header-Inner.css'
import { Container } from 'components/Base/Container'
import { FC } from 'react'

const HeaderInner: FC = ({ children }) => (
  <Container type="centered" className={cnHeader('Inner')}>
    {children}
  </Container>
)

export default HeaderInner
