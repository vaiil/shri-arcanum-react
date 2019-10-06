import { Layout } from 'components/Common/Layout'
import { withRedux } from '../app/redux/withRedux'
import { fetchRepos } from '../app/redux/actions/repo'

const Home = () => (
  <Layout title='Index page'/>
)

Home.getInitialProps = async ({ reduxStore }) => {
  const { dispatch } = reduxStore
  await dispatch(fetchRepos())
}

export default withRedux(Home)
