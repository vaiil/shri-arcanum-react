import { cn } from '@bem-react/classname'
import { compose } from '@bem-react/core'
import { ContainerTypeCentered } from './_type/Container_type_centered'
import './Container.css'
const cnContainer = cn('Container')

const Container = ({ className, children }) => (
  <div className={cnContainer(null, [className])}>
    {children}
  </div>
)

export default compose(
  ContainerTypeCentered
)(Container)
