import { cnLayout } from '../index'
import './Layout-Content.css'
import { Container } from 'components/Base/Container'
import { FC } from 'react'

const LayoutContent: FC = ({ children }) => (
  <div className={cnLayout('Content')}>
    <Container type="centered">
      {children}
    </Container>
  </div>
)
export default LayoutContent
