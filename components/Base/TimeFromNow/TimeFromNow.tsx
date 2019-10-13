import moment from 'moment'
import { FunctionComponent } from 'react'
import { TimeFromNowParams } from './index'

const TimeFromNow: FunctionComponent<TimeFromNowParams> = ({ timestamp, className }) => (
  <span className={className}>{moment(timestamp * 1000).fromNow()}</span>
)
export default TimeFromNow
