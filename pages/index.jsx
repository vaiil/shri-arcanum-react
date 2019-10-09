import { Layout } from 'components/Common/Layout'
import { withRedux } from '../app/redux/withRedux'
import { fetchRepos } from '../app/redux/actions/repo'

const Home = () => (
  <Layout title='Index page'/>
)

Home.getInitialProps = async ({ reduxStore, req }) => {
  const { dispatch } = reduxStore
  if (req) {
    await dispatch(fetchRepos())
  }
}

export default withRedux(Home)
