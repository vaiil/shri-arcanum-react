import { cn } from '@bem-react/classname'

const cnContainer = cn('Container')
export default ({ className, children }) => (
  <div className={cnContainer(null, [className])}>
    { children }
  </div>
)
