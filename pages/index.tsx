import { Layout } from 'components/Common/Layout'
import { withRedux, NextPageReduxContext } from '../app/redux/withRedux'
import { fetchRepos, selectRepo } from '../app/redux/actions/repo'
import { NextComponentType } from 'next'


const Home: NextComponentType<NextPageReduxContext, {}, {}> = () => (
  <Layout title='Index page'/>
)

Home.getInitialProps = async ({ reduxStore, req }) => {
  const { dispatch } = reduxStore
  if (req) {
    await dispatch(fetchRepos())
  }
  await dispatch(selectRepo(null))
}

export default withRedux(Home)
