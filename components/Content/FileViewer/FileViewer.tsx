import { cnFileViewer, FileViewerProps } from './index'
import FileViewerInfoBar from './-InfoBar/FileViewer-InfoBar'
import FileViewerMainWindow from './-MainWindow/FileViewer-MainWindow'
import './FileViewer.css'
import { FC } from 'react'

const FileViewer: FC<FileViewerProps> = ({ children, name, size, className }) => {
  return (
    <div className={cnFileViewer(null, [className])}>
      <FileViewerInfoBar name={name} size={size}/>
      <FileViewerMainWindow>{children}</FileViewerMainWindow>
    </div>
  )
}
export default FileViewer
