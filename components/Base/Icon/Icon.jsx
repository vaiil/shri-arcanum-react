import { cnIcon } from './index'
import './Icon.css'

export default ({ type, className, onClick }) => (
  <span className={cnIcon({ type }, [className])} onClick={onClick}/>
)
