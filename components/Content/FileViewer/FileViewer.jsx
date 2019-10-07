import { cnFileViewer } from './index'
import FileViewerInfoBar from './-InfoBar/FileViewer-InfoBar'
import FileViewerMainWindow from './-MainWindow/FileViewer-MainWindow'
import './FileViewer.css'

export default ({ children, name, size, className }) => {
  return (
    <div className={cnFileViewer(null, [className])}>
      <FileViewerInfoBar name={name} size={size}/>
      <FileViewerMainWindow>{children}</FileViewerMainWindow>
    </div>
  )
}