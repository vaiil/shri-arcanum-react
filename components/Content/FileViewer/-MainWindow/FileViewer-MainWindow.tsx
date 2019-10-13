import { cnFileViewer } from '../index'
import './FileViewer-MainWindow.css'
import { FC } from 'react'

const MainWindow: FC = ({ children }) => (
  <div className={cnFileViewer('MainWindow')}>
    {children}
  </div>
)


export default MainWindow
