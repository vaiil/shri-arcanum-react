import { cnFileViewer } from '../index'
import './FileViewer-MainWindow.css'

export default ({ children }) => (
  <div className={cnFileViewer('MainWindow')}>
    {children}
  </div>
)