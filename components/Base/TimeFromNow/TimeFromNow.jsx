import moment from 'moment'

export default ({ timestamp }) => moment(timestamp * 1000).fromNow()
