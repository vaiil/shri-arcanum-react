import './Container.css'
import { cnContainer, ContainerProps } from './index'
import { FunctionComponent } from 'react'


const Container: FunctionComponent<ContainerProps> = ({ className, children }) => (
  <div className={cnContainer(null, [className])}>
    {children}
  </div>
)

export default Container
