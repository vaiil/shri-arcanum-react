import { Layout } from 'components/Common/Layout'
import { withRedux, NextPageReduxContext } from '../app/redux/withRedux'
import { fetchRepos, selectRepo } from '../app/redux/actions/repo'

const Home = () => (
  <Layout title='Index page'/>
)

Home.getInitialProps = async ({ reduxStore, req }: NextPageReduxContext) => {
  const { dispatch } = reduxStore
  if (req) {
    // @ts-ignore
    await dispatch(fetchRepos())
  }
  await dispatch(selectRepo(null))
}

export default withRedux(Home)
